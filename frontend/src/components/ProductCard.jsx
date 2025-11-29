
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); 
  };

  const desc = product.description || '';
  const shortDesc = desc.length > 60 ? desc.slice(0, 60) + '...' : desc;

  const mrp = Math.round(product.price * 1.3);
  const discountPercent = Math.round(((mrp - product.price) / mrp) * 100);

  return (
    <div className="product-card">
      <img
        src={product.imageUrl || 'https://via.placeholder.com/400x300'}
        alt={product.name}
      />
      <div className="product-card-body">
        <h3 className="product-card-title">{product.name}</h3>
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
            className={added ? 'btn btn-added' : 'btn btn-secondary'}
          >
            {added ? 'Added ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
