// // src/components/Header.jsx
// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../contexts/AuthContext';
// import { CartContext } from '../contexts/CartContext';

// const Header = () => {
//   const { auth, logout } = useContext(AuthContext);
//   const { totalItems, clearCart} = useContext(CartContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     clearCart();
//     navigate('/');
//   };

//   return (
//     <header style={headerStyle}>
//       <nav style={navStyle}>
//         <div style={{ display: 'flex', gap: 12 }}>
//           <Link to="/">Home</Link>
//           <Link to="/cart">Cart ({totalItems})</Link>
//         </div>

//         <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
//           {auth.user ? (
//             <>
//               <span>Hi, {auth.user.name}</span>
//               <button onClick={handleLogout} style={logoutBtn}>
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/login">Login</Link>
//               <Link to="/register">Register</Link>
//             </>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// const headerStyle = {
//   padding: 12,
//   borderBottom: '1px solid #eee',
//   marginBottom: 12,
//   background: '#fff',
// };

// const navStyle = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
// };

// const logoutBtn = {
//   padding: '6px 10px',
//   borderRadius: 6,
//   border: '1px solid #ccc',
//   background: 'white',
//   cursor: 'pointer',
// };

// export default Header;


// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../contexts/AuthContext';
// import { CartContext } from '../contexts/CartContext';

// const Header = () => {
//   const { auth, logout } = useContext(AuthContext);
//   const { totalItems, clearCart } = useContext(CartContext);
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     clearCart();
//     setOpen(false);
//     navigate('/');
//   };

//   const closeMenu = () => setOpen(false);

//   return (
//     <header className="header">
//       <div className="header-inner">
//         <div className="header-left">
//           <div className="logo">
//             eKart <span>your mini store</span>
//           </div>
//         </div>

//         <button
//           className="nav-toggle"
//           onClick={() => setOpen((o) => !o)}
//           aria-label="Toggle navigation"
//         >
//           ☰
//         </button>

//         <nav
//           className={`nav-links ${open ? 'nav-open' : ''}`}
//           onClick={closeMenu}
//         >
//           <Link to="/">Home</Link>
//           <Link to="/cart" className="cart-pill">
//             Cart ({totalItems})
//           </Link>

//           {auth.user ? (
//             <>
//               <span>Hi, {auth.user.name}</span>
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className="btn"
//                 style={{ padding: '4px 10px', background: '#fff', color: '#2874f0' }}
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/login">Login</Link>
//               <Link to="/register">Register</Link>
//             </>
//           )}
//         </nav>

//         {/* Desktop right side (for wider screens) */}
//         <div className="header-right">
//           <Link to="/cart" className="cart-pill">
//             Cart ({totalItems})
//           </Link>
//           {auth.user ? (
//             <>
//               <span>Hi, {auth.user.name}</span>
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className="btn"
//                 style={{
//                   padding: '4px 10px',
//                   background: '#fff',
//                   color: '#2874f0',
//                 }}
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/login">Login</Link>
//               <Link to="/register">Register</Link>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../contexts/AuthContext';
// import { CartContext } from '../contexts/CartContext';

// const Header = () => {
//   const { auth, logout } = useContext(AuthContext);
//   const { totalItems, clearCart } = useContext(CartContext);
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     clearCart();
//     setOpen(false);
//     navigate('/');
//   };

//   const closeMenu = () => setOpen(false);

//   return (
//     <header className="header">
//       <div className="header-inner">

//         {/* Left: Logo */}
//         <div className="header-left">
//           <div className="logo">
//             eKart <span>your mini store</span>
//           </div>
//         </div>

//         {/* Mobile toggle */}
//         <button
//           className="nav-toggle"
//           onClick={() => setOpen(o => !o)}
//           aria-label="Toggle navigation"
//         >
//           ☰
//         </button>

//         {/* Single nav for BOTH desktop + mobile */}
//         <nav
//           className={`nav-links ${open ? 'nav-open' : ''}`}
//           onClick={closeMenu}
//         >
//           <Link to="/">Home</Link>
//           <Link to="/cart" className="cart-pill">
//             Cart ({totalItems})
//           </Link>

//           {auth.user ? (
//             <>
//               <span>Hi, {auth.user.name}</span>
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className="btn"
//                 style={{
//                   padding: '4px 10px',
//                   background: '#fff',
//                   color: '#2874f0',
//                 }}
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/login">Login</Link>
//               <Link to="/register">Register</Link>
//             </>
//           )}
//         </nav>

//       </div>
//     </header>
//   );
// };

// export default Header;


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

        {/* LEFT: logo + toggle grouped together so opening menu won't shift the logo */}
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
