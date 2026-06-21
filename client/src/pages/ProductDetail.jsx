import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`/api/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
      // Load placeholder product data
      loadPlaceholderProduct(id);
    }
  };

  const loadPlaceholderProduct = (productId) => {
    const placeholders = {
      '1': {
        _id: '1',
        name: 'Premium MMA Shorts',
        category: 'Shorts',
        description: 'High-quality fighting shorts with maximum mobility and durability',
        price: 79.99,
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Black', 'White', 'Gray'],
        stock: 50,
      },
      '2': {
        _id: '2',
        name: 'MMA Compression Shirt',
        category: 'Compression',
        description: 'Premium compression top for training and competition use',
        price: 49.99,
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Black', 'Gray'],
        stock: 50,
      },
    };
    setProduct(placeholders[productId] || placeholders['1']);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addToCart({
        ...product,
        size: selectedSize,
        color: selectedColor,
      });
    }
    alert('Added to cart!');
  };

  if (!product) {
    return <div className="loading">Loading product...</div>;
  }

  return (
    <div className="product-detail">
      <Link to="/" className="back-link">← Back to Products</Link>

      <div className="product-detail-container">
        <div className="product-detail-image">
          <div className="image-placeholder-large">{product.category}</div>
        </div>

        <div className="product-detail-info">
          <h1 className="product-detail-name">{product.name}</h1>
          <p className="product-detail-category">{product.category}</p>
          
          <div className="product-detail-price">
            <span className="price">${product.price}</span>
            <span className={`stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </span>
          </div>

          <p className="product-detail-description">{product.description}</p>

          <div className="product-options">
            <div className="option-group">
              <label>Size</label>
              <div className="size-options">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-group">
              <label>Color</label>
              <div className="color-options">
                {product.colors.map(color => (
                  <button
                    key={color}
                    className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                    onClick={() => setSelectedColor(color)}
                  >
                    <span className={`color-dot color-${color.toLowerCase()}`}></span>
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-group">
              <label>Quantity</label>
              <div className="quantity-control">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>
          </div>

          <button 
            className="add-to-cart-large-btn"
            onClick={handleAddToCart}
            disabled={product.stock <= 0}
          >
            {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
