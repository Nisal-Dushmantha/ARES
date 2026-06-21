import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product._id}`} className="product-image-wrapper">
        <div className="product-image">
          <div className="image-placeholder">{product.category}</div>
        </div>
      </Link>
      
      <div className="product-info">
        <Link to={`/product/${product._id}`} className="product-name-link">
          <h3 className="product-name">{product.name}</h3>
        </Link>
        
        <p className="product-category">{product.category}</p>
        
        <div className="product-colors">
          {product.colors.map(color => (
            <span key={color} className={`color-dot color-${color.toLowerCase()}`}></span>
          ))}
        </div>
        
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button 
            className="add-to-cart-btn"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
