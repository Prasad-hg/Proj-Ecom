// src/components/Header.jsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { CartContext } from '../contexts/CartContext';

const Header = () => {
  const { auth, logout } = useContext(AuthContext);
  const { totalItems, clearCart} = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    clearCart();
    navigate('/');
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({totalItems})</Link>
        </div>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {auth.user ? (
            <>
              <span>Hi, {auth.user.name}</span>
              <button onClick={handleLogout} style={logoutBtn}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

const headerStyle = {
  padding: 12,
  borderBottom: '1px solid #eee',
  marginBottom: 12,
  background: '#fff',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoutBtn = {
  padding: '6px 10px',
  borderRadius: 6,
  border: '1px solid #ccc',
  background: 'white',
  cursor: 'pointer',
};

export default Header;
