export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  gallery: string[];
}

export const PRODUCTS: Product[] = [
  // -------------------- NECKLACES --------------------
  {
    id: 1,
    name: "Tiffany Titan by Pharrell Williams",
    description: "Necklace in rose gold with diamonds — bold, contemporary, and elegant.",
    price: "£55,500",
    category: "necklaces",
    image: "/assets/images/necklace1.jpg",
    gallery: [
      "/assets/images/necklace1.jpg",
      "/assets/images/necklace1_detail1.jpg",
      "/assets/images/necklace1_detail2.jpg",
    ],
  },
  {
    id: 2,
    name: "Elsa Peretti®",
    description: "Starfish necklace in yellow gold with pavé diamonds, radiating natural beauty.",
    price: "£88,500",
    category: "necklaces",
    image: "/assets/images/necklace2.jpg",
    gallery: [
      "/assets/images/necklace2.jpg",
      "/assets/images/necklace2_detail1.jpg",
      "/assets/images/necklace2_detail2.jpg",
    ],
  },
  {
    id: 3,
    name: "Tiffany & Co. Schlumberger® ",
    description: "Bird on a Rock Pendant in yellow gold and platinum with a stunning green gemstone centerpiece.",
    price: "£127,500",
    category: "necklaces",
    image: "/assets/images/necklace3.jpg",
    gallery: [
      "/assets/images/necklace3.jpg",
      "/assets/images/necklace3_detail1.jpg",
      "/assets/images/necklace3_detail2.jpg",
    ],
  },

  // -------------------- EARRINGS --------------------
  {
    id: 4,
    name: "Sixteen Stone by Tiffany",
    description: "Hoop Earrings in Platinum and Yellow Gold with Diamonds",
    price: "£21,400",
    category: "earrings",
    image: "/assets/images/earrings1.jpg",
    gallery: [
      "/assets/images/earrings1.jpg",
      "/assets/images/earrings1_detail1.jpg",
      "/assets/images/earrings1_detail2.jpg",
    ],
  },
  {
    id: 5,
    name: "Tiffany Victoria® ",
    description: "Diamond Vine Earrings in 18k Rose Gold",
    price: "£9,775",
    category: "earrings",
    image: "/assets/images/earrings2.jpg",
    gallery: [
      "/assets/images/earrings2.jpg",
      "/assets/images/earrings2_detail1.jpg",
      "/assets/images/earrings2_detail2.jpg",
    ],
  },
  {
    id: 6,
    name: "Tiffany Titan by Pharrell Williams",
    description: "Pearl Earrings in Yellow Gold with Diamonds",
    price: "£11,200",
    category: "earrings",
    image: "/assets/images/earrings3.jpg",
    gallery: [
      "/assets/images/earrings3.jpg",
      "/assets/images/earrings3_detail1.jpg",
      "/assets/images/earrings3_detail2.jpg",
    ],
  },

  // -------------------- RINGS --------------------
  {
    id: 7,
    name: "Tiffany Victoria®",
    description: "Vine Ring in Platinum with a Tanzanite and Diamonds",
    price: "£18,500",
    category: "rings",
    image: "/assets/images/ring1.jpg",
    gallery: [
      "/assets/images/ring1.jpg",
      "/assets/images/ring1_detail1.jpg",
      "/assets/images/ring1_detail2.jpg",
    ],
  },
  {
    id: 8,
    name: "Apollo by Tiffany",
    description: "Ring in yellow gold and platinum with diamonds — a statement of luminous beauty.",
    price: "£41,800",
    category: "rings",
    image: "/assets/images/ring2.jpg",
    gallery: [
      "/assets/images/ring2.jpg",
      "/assets/images/ring2_detail1.jpg",
      "/assets/images/ring2_detail2.jpg",
    ],
  },
  {
    id: 9,
    name: "Bird on a Rock by Tiffany",
    description: "Lovebirds ring in platinum and gold with diamonds, romantic and radiant.",
    price: "£32,200",
    category: "rings",
    image: "/assets/images/ring3.jpg",
    gallery: [
      "/assets/images/ring3.jpg",
      "/assets/images/ring3_detail1.jpg",
      "/assets/images/ring3_detail2.jpg",
    ],
  },

  // -------------------- BRACELETS --------------------
  {
    id: 10,
    name: "Tiffany HardWear Pearl Bracelet",
    description: "Pearl bracelet in silver, 7–8 mm pearls, showcasing refined modern elegance.",
    price: "£1,375",
    category: "bracelets",
    image: "/assets/images/bracelet1.jpg",
    gallery: [
      "/assets/images/bracelet1.jpg",
      "/assets/images/bracelet1_detail1.jpg",
      "/assets/images/bracelet1_detail2.jpg",
    ],
  },
  {
    id: 11,
    name: "Return to Tiffany™ Heart Tag Bead Bracelet",
    description: "Classic Tiffany Blue® heart tag bracelet in sterling silver.",
    price: "£275",
    category: "bracelets",
    image: "/assets/images/bracelet2.jpg",
    gallery: [
      "/assets/images/bracelet2.jpg",
      "/assets/images/bracelet2_detail1.jpg",
      "/assets/images/bracelet2_detail2.jpg",
    ],
  },
  {
    id: 12,
    name: "Sixteen Stone by Tiffany",
    description: "Bangle in Platinum with Diamonds",
    price: "£52,000",
    category: "bracelets",
    image: "/assets/images/bracelet3.jpg",
    gallery: [
      "/assets/images/bracelet3.jpg",
      "/assets/images/bracelet3_detail1.jpg",
      "/assets/images/bracelet3_detail2.jpg",
    ],
  },
];
