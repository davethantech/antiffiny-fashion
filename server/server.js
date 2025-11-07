import express from "express";
import Stripe from "stripe";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15", // ✅ 兼容稳定版本
});


// ✅ 排除 webhook 的 bodyParser 影响
app.use((req, res, next) => {
  if (req.originalUrl === "/webhook") {
    next();
  } else {
    bodyParser.json()(req, res, next);
  }
});

app.use(cors());

// ⚙️ MySQL 连接池
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// ✅ 初始化数据库
db.query(`
  CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id VARCHAR(255),
    amount DECIMAL(10,2),
    currency VARCHAR(10),
    customer_email VARCHAR(255),
    status VARCHAR(50),
    items JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);
db.query(`CREATE INDEX IF NOT EXISTS idx_order_id ON orders(order_id)`);

// 🧾 创建 Checkout Session
// 🧾 创建支付会话
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { cart } = req.body;

    if (!cart || cart.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    console.log("🛒 Received cart:", cart);

    const line_items = cart.map((item) => ({
      price_data: {
        currency: "gbp",
        product_data: {
          name: item.name,
          description: item.description,
          images: [`http://localhost:5173${item.image}`],
        },
        unit_amount: parseFloat(item.price.replace(/[£,]/g, "")) * 100,
      },
      quantity: item.quantity,
    }));

    // ✅ 创建 Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      success_url: "http://localhost:5173/#/success",
      cancel_url: "http://localhost:5173/#/cart",
      locale: "en", // 🇬🇧 强制英文界面
    });

    // ✅ 保存 checkout 链接到数据库
    const amount = line_items.reduce(
      (sum, item) => sum + item.price_data.unit_amount * item.quantity,
      0
    ) / 100;

    db.query(
      `INSERT INTO orders (order_id, amount, currency, customer_email, status, items, checkout_url)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        session.id,
        amount,
        "GBP",
        "pending_customer",
        "unpaid",
        JSON.stringify(cart),
        session.url, // <---- ✅ 这里保存 checkout 链接
      ],
      (err) => {
        if (err) console.error("❌ MySQL insert error:", err);
        else console.log(`📝 Created unpaid order: ${session.id}`);
      }
    );

    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});



// ⚡ Stripe Webhook
app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log("❌ Webhook signature error:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log("✅ Payment successful for:", session.id);

      const email = session.customer_details?.email || "unknown@example.com";

      // ✅ 更新数据库订单状态为 paid
      db.query(
        `UPDATE orders 
         SET status = ?, customer_email = ?, created_at = CURRENT_TIMESTAMP
         WHERE order_id = ?`,
        ["paid", email, session.id],
        (err, result) => {
          if (err) console.error("❌ MySQL update error:", err);
          else console.log(`💰 Order ${session.id} marked as PAID`);
        }
      );
    }

    // ❌ 支付失败或取消（可选）
    if (
      event.type === "checkout.session.async_payment_failed" ||
      event.type === "checkout.session.expired"
    ) {
      const session = event.data.object;
      db.query(
        `UPDATE orders SET status = 'failed' WHERE order_id = ?`,
        [session.id],
        (err) => {
          if (err) console.error("MySQL update error:", err);
          else console.log(`⚠️ Order ${session.id} marked as FAILED`);
        }
      );
    }

    res.sendStatus(200);
  }
);


// 🧾 获取订单
app.get("/orders", (req, res) => {
  db.query("SELECT * FROM orders ORDER BY created_at DESC LIMIT 100", (err, results) => {
    if (err) {
      console.error("❌ MySQL 查询错误:", err);
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results);
  });
});

app.listen(4242, () => {
  console.log("✅ Server running on http://localhost:4242");
  console.log("🌐 Webhook listening on /webhook");
  console.log("🧾 Orders API available at /orders");
});

app.get("/", (req, res) => {
    res.send("✅ Tiffany Store backend is running!");
  });
  
