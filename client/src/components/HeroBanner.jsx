import React from 'react';
import './HeroBanner.css';

function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1 className="hero-title">BE BETTER EVERYDAY</h1>
        <p className="hero-subtitle">Explore our Collection</p>
        <div className="hero-buttons">
          <button className="hero-btn hero-btn-primary">SHOP MENS</button>
          <button className="hero-btn hero-btn-secondary">SHOP WOMENS</button>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
