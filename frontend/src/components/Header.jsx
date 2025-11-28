
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { CartContext } from '../contexts/CartContext';

const Header = () => {
  const { auth, logout } = useContext(AuthContext);
  const { totalItems, clearCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    clearCart();
    setOpen(false);
    navigate('/');
  };

  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <div className="logo">
            <Link to="/" onClick={() => setOpen(false)} style={{ color: 'inherit', textDecoration: 'none' }}>
              eKart <span>your mini store</span>
            </Link>
          </div>
          <div className="search-box">
  <input
    type="text"
    placeholder="Search feature in testing..."
    className="search-input"
  />
  <button className="search-btn">🔍</button>
</div>


          {/* move the toggle here so it doesn't sit alone and push layout */}
          <button
            className="nav-toggle"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle navigation"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>

        {/* SINGLE nav for desktop + mobile */}
        <nav
          className={`nav-links ${open ? 'nav-open' : ''}`}
          onClick={closeMenu}
        >
          <Link to="/">Home</Link>
          <Link to="/cart" className="cart-pill">
            Cart ({totalItems})
          </Link>

          {auth.user ? (
            <>
              <span>Hi, {auth.user.name}</span>
              <button
                type="button"
                onClick={handleLogout}
                className="btn"
                style={{
                  padding: '4px 10px',
                  background: '#fff',
                  color: '#2874f0',
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>

      </div>
    </header>
  );
};

export default Header;
