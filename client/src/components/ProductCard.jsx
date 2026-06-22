import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  const colors = Array.isArray(product?.colors) ? product.colors : [];

  return (
    <div className="product-card">
      <Link to={`/product/${product._id}`} className="product-image-wrapper">
        <div className="product-image">
          <div className="image-placeholder">{product?.category || 'Product'}</div>
        </div>
      </Link>
      
      <div className="product-info">
        <Link to={`/product/${product._id}`} className="product-name-link">
          <h3 className="product-name">{product?.name || 'Untitled Product'}</h3>
        </Link>
        
        <p className="product-category">{product?.category || 'Uncategorized'}</p>
        
        <div className="product-colors">
          {colors.map(color => (
            <span key={color} className={`color-dot color-${color.toLowerCase()}`}></span>
          ))}
        </div>
        
        <div className="product-footer">
          <span className="product-price">${product?.price ?? '0.00'}</span>
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
