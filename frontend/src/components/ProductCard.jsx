// // src/components/ProductCard.jsx
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../contexts/CartContext';

// const ProductCard = ({ product }) => {
//     const { addToCart } = useContext(CartContext);

//   const handleAdd = () => {
//     addToCart(product);
//   };
//   return (
//     <div className="card" style={cardStyle}>
//       <img src={product.imageUrl || 'https://via.placeholder.com/400x300'} alt={product.name} style={imgStyle} />
//       <div style={{ padding: 12 }}>
//         <h3 style={{ margin: '6px 0' }}>{product.name}</h3>
//         <p style={{ margin: '6px 0' }}>₹{product.price}</p>
//         <p style={{ margin: '6px 0', fontSize: 13, color: '#555' }}>{product.description.slice(0, 80)}{product.description.length>80?'...':''}</p>
//         <Link to={`/product/${product._id}`} style={btnStyle}>View</Link>
//          <button type="button" onClick={handleAdd} style={cartBtn}>
//             Add to Cart
//           </button>
//       </div>
//     </div>
//   );
// };

// const cardStyle = {
//   width: 280, border: '1px solid #eee', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', margin: 12
// };
// const imgStyle = { width: '100%', height: 160, objectFit: 'cover' };
// const btnStyle = { display: 'inline-block', marginTop: 8, padding: '8px 12px', background: '#0b5fff', color: '#fff', borderRadius: 6, textDecoration: 'none' };

// const viewBtn = {
//   display: 'inline-block',
//   padding: '8px 12px',
//   background: '#0b5fff',
//   color: '#fff',
//   borderRadius: 6,
//   textDecoration: 'none',
// };
// const cartBtn = {
//   padding: '8px 12px',
//   background: '#00b894',
//   color: '#fff',
//   borderRadius: 6,
//   border: 'none',
//   cursor: 'pointer',
// };
// export default ProductCard;




// src/components/ProductCard.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart(product);
  };

  const desc = product.description || '';
  const shortDesc = desc.length > 60 ? desc.slice(0, 60) + '...' : desc;

  // 🔹 Auto-calc MRP and discount
  const mrp = Math.round(product.price * 1.3); // assume +30% as original price
  const discountPercent = Math.round(((mrp - product.price) / mrp) * 100);

  return (
    <div className="product-card">
      <img
        src={product.imageUrl || 'https://via.placeholder.com/400x300'}
        alt={product.name}
      />
      <div className="product-card-body">
        <h3 className="product-card-title">{product.name}</h3>

        {/* 👉 Flipkart-style pricing */}
        <p className="product-card-price">
          <span style={{ fontWeight: 700, fontSize: 16 }}>₹{product.price}</span>
          <span
            style={{
              textDecoration: 'line-through',
              marginLeft: 8,
              color: '#7a7a7a',
              fontSize: 14,
            }}
          >
            ₹{mrp}
          </span>
          <span
            style={{
              marginLeft: 8,
              color: '#388e3c',
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            {discountPercent}% OFF
          </span>
        </p>

        <p className="product-card-desc">{shortDesc}</p>

        <div className="product-card-actions">
          <Link to={`/product/${product._id}`} className="btn btn-primary">
            View
          </Link>
          <button
            type="button"
            onClick={handleAdd}
            className="btn btn-secondary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
