// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-2">&copy; 2025 Employee Management System</p>
        <p>
          <a href="/about" className="text-white me-3">About Us</a>
          <a href="/contact" className="text-white me-3">Contact</a>
          <a href="/privacy-policy" className="text-white">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
