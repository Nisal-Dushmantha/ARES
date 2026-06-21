import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>ARES</h1>
          <p className="tagline">MMA Merchandise</p>
        </Link>
        
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/cart" className="nav-link">Cart ({cartCount})</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
