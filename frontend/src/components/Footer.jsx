// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} eKart. All rights reserved.</span>
        <span>Built with MERN • Inspired by Flipkart</span>
      </div>
    </footer>
  );
};

export default Footer;
