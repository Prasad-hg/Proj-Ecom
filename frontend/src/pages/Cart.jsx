
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { items, totalItems, totalPrice, removeFromCart, clearCart } =
    useContext(CartContext);

  if (items.length === 0) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Cart</h2>
      <p>
        Items: <strong>{totalItems}</strong> | Total:{' '}
        <strong>₹{totalPrice}</strong>
      </p>
      <button onClick={clearCart} style={clearBtn}>
        Clear Cart
      </button>
      <div style={{ marginTop: 16 }}>
        {items.map((item) => (
          <div key={item.productId} style={row}>
            <img
              src={item.imageUrl || 'https://via.placeholder.com/80x80'}
              alt={item.name}
              style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 6 }}
            />
            <div style={{ flex: 1, marginLeft: 12 }}>
              <h4 style={{ margin: 0 }}>{item.name}</h4>
              <p style={{ margin: '4px 0' }}>
                Price: ₹{item.price} | Qty: {item.qty}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.productId)}
              style={removeBtn}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const row = {
  display: 'flex',
  alignItems: 'center',
  padding: '8px 0',
  borderBottom: '1px solid #eee',
};
const removeBtn = {
  padding: '6px 10px',
  borderRadius: 6,
  border: '1px solid #ff7675',
  background: '#ffecec',
  cursor: 'pointer',
};
const clearBtn = {
  padding: '6px 10px',
  borderRadius: 6,
  border: '1px solid #ccc',
  background: '#fafafa',
  cursor: 'pointer',
  marginBottom: 12,
};

export default Cart;
