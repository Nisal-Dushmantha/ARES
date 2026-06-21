import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About ARES</h3>
          <p>Premium MMA merchandise for fighters and enthusiasts.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@ares-mma.com</p>
          <p>Phone: 1-800-MMA-GEAR</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} ARES MMA Merchandise. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
