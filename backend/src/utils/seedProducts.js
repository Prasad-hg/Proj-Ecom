require('dotenv').config();
const connectDB = require('../config/db');
const Product = require('../models/product');

const sampleProducts = [
  {
    name: 'Basic T-Shirt',
    price: 299,
    description: 'Comfortable cotton t-shirt, perfect for everyday wear.',
    imageUrl: 'https://via.placeholder.com/400x300?text=T-Shirt'
  },
  {
    name: 'Running Shoes',
    price: 2599,
    description: 'Lightweight running shoes with breathable mesh upper.',
    imageUrl: 'https://via.placeholder.com/400x300?text=Shoes'
  },
  {
    name: 'Wireless Earbuds',
    price: 1499,
    description: 'Compact earbuds with good battery life and clear sound.',
    imageUrl: 'https://via.placeholder.com/400x300?text=Earbuds'
  },
  {
    name: 'Backpack',
    price: 899,
    description: 'Durable backpack with multiple compartments and padded straps.',
    imageUrl: 'https://via.placeholder.com/400x300?text=Backpack'
  },
  {
    name: 'Water Bottle',
    price: 199,
    description: 'Stainless steel water bottle keeps drinks cool for hours.',
    imageUrl: 'https://via.placeholder.com/400x300?text=Bottle'
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
