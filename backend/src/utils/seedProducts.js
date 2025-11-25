require('dotenv').config();
const connectDB = require('../config/db');
const Product = require('../models/product');

const sampleProducts = [
  {
    name: 'Basic T-Shirt',
    price: 299,
    description: 'Comfortable cotton t-shirt, perfect for everyday wear.',
    imageUrl: 'https://res.cloudinary.com/djaqu4yif/image/upload/v1764099635/mg8_khrxva.avif'
  },
  {
    name: 'Running Shoes',
    price: 2599,
    description: 'Lightweight running shoes with breathable mesh upper.',
    imageUrl: 'https://res.cloudinary.com/djaqu4yif/image/upload/v1764099635/img4_i98yhm.avif'
  },
  {
    name: 'Wireless Earbuds',
    price: 1499,
    description: 'Compact earbuds with good battery life and clear sound.',
    imageUrl: 'https://res.cloudinary.com/djaqu4yif/image/upload/v1764099635/img6_pnxmga.avif'
  },
  {
    name: 'Backpack',
    price: 899,
    description: 'Durable backpack with multiple compartments and padded straps.',
    imageUrl: 'https://res.cloudinary.com/djaqu4yif/image/upload/v1764099635/img7_t2j3u0.avif'
  },
  {
    name: 'Water Bottle',
    price: 199,
    description: 'Stainless steel water bottle keeps drinks cool for hours.',
    imageUrl: 'https://res.cloudinary.com/djaqu4yif/image/upload/v1764099636/img1_ujybsc.avif'
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
