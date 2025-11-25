// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="card" style={cardStyle}>
      <img src={product.imageUrl || 'https://via.placeholder.com/400x300'} alt={product.name} style={imgStyle} />
      <div style={{ padding: 12 }}>
        <h3 style={{ margin: '6px 0' }}>{product.name}</h3>
        <p style={{ margin: '6px 0' }}>₹{product.price}</p>
        <p style={{ margin: '6px 0', fontSize: 13, color: '#555' }}>{product.description.slice(0, 80)}{product.description.length>80?'...':''}</p>
        <Link to={`/product/${product._id}`} style={btnStyle}>View</Link>
      </div>
    </div>
  );
};

const cardStyle = {
  width: 280, border: '1px solid #eee', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', margin: 12
};
const imgStyle = { width: '100%', height: 160, objectFit: 'cover' };
const btnStyle = { display: 'inline-block', marginTop: 8, padding: '8px 12px', background: '#0b5fff', color: '#fff', borderRadius: 6, textDecoration: 'none' };

export default ProductCard;
