import { execSync } from "child_process";

const platform = process.env.VERCEL ? "vercel" : "railway";

console.log("📦 Build platform:", platform);

if (platform === "vercel") {
  console.log("🚀 Running Vite build for Vercel...");
  execSync("vite build", { stdio: "inherit" });
} else {
  console.log("⏭️ Skipping Vite build for Railway backend");
}
