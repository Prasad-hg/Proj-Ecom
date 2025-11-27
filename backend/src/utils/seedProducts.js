require('dotenv').config();
const connectDB = require('../config/db');
const Product = require('../models/product');

const sampleProducts = [
  
  {
    "name": "Apple iPhone 17",
    "price": 56999,
    "description": "The Apple iPhone 17 features a 6.1-inch Super Retina XDR display with Dolby Vision, providing stunning visuals and true-to-life colors. Powered by the A15 Bionic chip, it delivers smooth performance whether you're gaming, multitasking, or editing videos. The dual-camera system includes a 12MP main sensor with sensor-shift optical image stabilization and a 12MP ultra-wide camera for breathtaking photography in all lighting conditions. Crash Detection and Emergency SOS via satellite add an extra layer of safety. The ceramic shield front and aerospace-grade aluminum frame ensure durability while maintaining a premium aesthetic.",
    "imageUrl": "https://m.media-amazon.com/images/I/31Bn8sQI3xL._SX342_SY445_QL70_FMwebp_.jpg"
  },
  {
    "name": "Samsung Galaxy S23",
    "price": 62999,
    "description": "Samsung Galaxy S23 comes with a 6.1-inch Dynamic AMOLED 2X display supporting 120Hz adaptive refresh rate for an ultra-smooth experience. Powered by the Snapdragon 8 Gen 2 chipset, it delivers unmatched performance and power efficiency. The triple camera system features a 50MP main lens, 12MP ultra-wide, and 10MP telephoto camera with 30X Space Zoom, making it perfect for photography enthusiasts. The 3900mAh battery lasts all day, and the IP68 rating ensures durability against dust and water. With Gorilla Glass Victus 2 and Armor Aluminum frame, the S23 is built for long-term durability.",
    "imageUrl": "https://m.media-amazon.com/images/I/719zApN1mhL._SX679_.jpg"
  },
  {
    "name": "Sony WH-1000XM4 Wireless Headphones",
    "price": 24999,
    "description": "Sony WH-1000XM4 is equipped with industry-leading Active Noise Cancellation using Dual Noise Sensor technology, providing an immersive audio experience. The 40mm drivers powered by LDAC deliver Hi-Res certified sound with deep bass, crisp vocals, and balanced highs. With multipoint pairing, you can connect two devices simultaneously and switch seamlessly. It offers up to 30 hours of battery life, and fast charging provides 5 hours of playback in 10 minutes. The headphones adapt to your activities using Adaptive Sound Control and offer a wearing detection sensor for auto play/pause.",
    "imageUrl": "https://m.media-amazon.com/images/I/21Fx90Uq-ZL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    "name": "Boat Airdopes 141 True Wireless Earbuds",
    "price": 1099,
    "description": "Boat Airdopes 141 TWS earbuds offer a massive 42-hour playback time with ASAP fast charging that delivers 75 minutes of audio in just 5 minutes. Equipped with ENx noise cancellation technology for clear calling and 8mm dynamic drivers, the earbuds deliver punchy bass and clean vocals. The IPX4 water-resistant rating makes it suitable for workouts and travel. With Beast Mode, the earbuds can switch to a low latency of 80ms for smooth gaming audio.",
    "imageUrl": "https://m.media-amazon.com/images/I/41kWMvhJyEL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    "name": "Noise ColorFit Pro 4 Alpha Smartwatch",
    "price": 3799,
    "description": "The Noise ColorFit Pro 4 Alpha smartwatch features a 1.78-inch AMOLED Always-On Display with 368x448 resolution and 60Hz refresh rate. The smartwatch supports Bluetooth calling with a built-in speaker and microphone, enabling seamless communication. It comes with 100+ sports modes, heart rate monitoring, SpO2 tracking, stress monitoring, and female cycle tracking. The watch is powered by a 300mAh battery offering up to 7 days of backup. Navigation is smooth with the functional rotating crown, and the premium metallic build adds a stylish look.",
    "imageUrl": "https://m.media-amazon.com/images/I/514OgRXtIML._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    "name": "HP Victus Intel Core i5 Gaming Laptop",
    "price": 62999,
    "description": "The HP Victus gaming laptop is powered by the 12th Gen Intel Core i5 processor and NVIDIA RTX 3050 GPU, offering boosted performance for gaming and heavy workloads. It features a 15.6-inch Full HD display with a 144Hz refresh rate for smooth gameplay. The dual-fan cooling technology maintains temperature under intense load. It comes with 512GB NVMe SSD, 16GB DDR4 RAM, and Bang & Olufsen tuned speakers. The backlit keyboard and OMEN Gaming Hub elevate the gaming experience.",
    "imageUrl": "https://m.media-amazon.com/images/I/511KclHIutL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    "name": "Puma Men’s Running Shoes",
    "price": 2899,
    "description": "Puma's running shoes feature a breathable mesh upper for ventilation and lightweight performance. The EVA midsole ensures cushioned landings and responsive takeoffs during running. The rubber outsole provides high-grip traction for different surfaces. Designed for long jogging sessions or intense gym training, these shoes maintain comfort and durability without compromising style. The padded heel collar eliminates skin irritation while the lace-up closure ensures a perfect fit.",
    "imageUrl": "https://m.media-amazon.com/images/I/61ZoE2ZJ18L._SY695_.jpg"
  },
  {
    "name": "Campus Men’s Casual Sneakers",
    "price": 1499,
    "description": "Campus sneakers are built with a knitted upper for enhanced airflow and a sporty lifestyle design. The memory foam insole improves comfort for long-hour walking. Their non-marking outsole offers good grip and stability on both indoor and outdoor surfaces. These sneakers pair well with jeans, joggers, or shorts, making them ideal for casual outings and everyday wear.",
    "imageUrl": "https://m.media-amazon.com/images/I/71SGbzBsmmL._SY625_.jpg"
  },
  {
    "name": "Roadster Men’s Casual Shirt",
    "price": 699,
    "description": "Roadster’s checked cotton shirt offers a slim fit with button-down styling, ideal for outings, office casual wear, and daily comfort. The breathable material keeps the skin cool even during long hours. The shirt retains its color and texture even after multiple washes. Suitable for pairing with jeans or chinos for a semi-formal or smart casual look.",
    "imageUrl": "https://m.media-amazon.com/images/I/814VgnIpiyL._SY741_.jpg"
  },
  {
    "name": "Allen Solly Men’s T-Shirt",
    "price": 799,
    "description": "Allen Solly’s premium cotton T-shirt is made from bio-washed fabric with a soft finish for all-day comfort. The slim-fit design combined with the ribbed round neck enhances the casual look while maintaining stretchability. Resistant to shrinkage and color fading, the T-shirt is ideal for regular use.",
    "imageUrl": "https://m.media-amazon.com/images/I/81a+-Kop5sL._SX569_.jpg"
  },
  {
    "name": "Nivia Football",
    "price": 899,
    "description": "Nivia football is crafted with thermally-bonded PU material for superior durability and aerodynamic performance. Its high air retention bladder provides consistent bounce and shape. Suitable for turf, artificial grass, and soft ground play, the football maintains grip in both wet and dry conditions. FIFA-quality construction makes it ideal for practice matches and training.",
    "imageUrl": "https://m.media-amazon.com/images/I/81pgKnRou9L._SX679_.jpg"
  },
  {
    "name": "American Tourister Polyester Backpack",
    "price": 1499,
    "description": "This multipurpose backpack features a spacious 32L capacity with multiple compartments for books, laptops, accessories, and travel essentials. Made from high-density polyester fabric for long-term durability, it includes padded shoulder straps and breathable back support for comfortable carrying. Water-resistant coating protects valuables during rain and transit.",
    "imageUrl": "https://m.media-amazon.com/images/I/71-WJxk3WQL._SX679_.jpg"
  },
  {
    "name": "Fogg Men’s Scent Intense Perfume",
    "price": 349,
    "description": "Fogg’s Intense fragrance offers a long-lasting masculine scent with oriental woody notes. The perfume is alcohol-based and specially crafted for lasting freshness throughout the day. Suitable for parties, meetings, or daily use, the scent leaves a confident and energetic feel.",
    "imageUrl": "https://m.media-amazon.com/images/I/41weZzUkOuL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    "name": "Wild Stone Ultra Sensual Perfume",
    "price": 299,
    "description": "Wild Stone Ultra Sensual is a signature perfume featuring citrus top notes with spicy mid notes and deep woody base notes. It lasts long even in humid weather, making it suitable for travel and regular use. The sleek bottle enhances ease of use and makes it gift-worthy.",
    "imageUrl": "https://m.media-amazon.com/images/I/41zBJxypstL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    "name": "Fossil Analog Men's Watch",
    "price": 8999,
    "description": "The Fossil analog watch features a mineral glass dial with a stainless steel case and premium leather strap. Powered by precise quartz movement, the watch supports date functionality and 5ATM water resistance. Suitable for parties, office wear, and gifting occasions.",
    "imageUrl": "https://m.media-amazon.com/images/I/411Zv5sT1vL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    "name": "Safari Hardshell Luggage 28-Inch",
    "price": 3999,
    "description": "Safari’s 28-inch travel trolley is made from impact-resistant polycarbonate shell with TSA-approved lock. The 360-degree dual wheels ensure smooth movement on all surfaces, while the expandable body supports extra packing space. The interior features cross-straps and zippered compartments for organized packing.",
    "imageUrl": "https://m.media-amazon.com/images/I/31oEUkFBLVL._SY300_SX300_QL70_FMwebp_.jpg"
  },
  {
    "name": "Philips Hair Straightener BHS393",
    "price": 2499,
    "description": "Philips BHS393 straightener uses SilkProtect ceramic plates for safe and even heat distribution that reduces hair damage while styling. The temperature range from 160°C to 230°C ensures versatility for smoothening, curling, and straightening. It heats up within 60 seconds and features a 1.6m swivel cord for convenience.",
    "imageUrl": "https://m.media-amazon.com/images/I/415PFYH9z2L._SY300_SX300_QL70_FMwebp_.jpg"
  }


];

const importData = async () => {
  try {
    await connectDB();
    await Product.deleteMany({});
    const created = await Product.insertMany(sampleProducts);
    console.log(`Inserted ${created.length} products`);
    process.exit();
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
};

importData();
