import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import HeroBanner from '../components/HeroBanner';
import './Home.css';

function Home({ addToCart }) {
  const getPlaceholderProducts = () => {
    return [
      {
        _id: '1',
        name: 'Premium MMA Shorts',
        category: 'Shorts',
        description: 'High-quality fighting shorts with maximum mobility',
        price: 79.99,
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Black', 'White', 'Gray'],
        stock: 50,
      },
      {
        _id: '2',
        name: 'MMA Compression Shirt',
        category: 'Compression',
        description: 'Compression top for training and competition',
        price: 49.99,
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Black', 'Gray'],
        stock: 50,
      },
      {
        _id: '3',
        name: 'Elite MMA Shorts V2',
        category: 'Shorts',
        description: 'Advanced design with ergonomic fit',
        price: 89.99,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'White'],
        stock: 30,
      },
      {
        _id: '4',
        name: 'Compression Tights',
        category: 'Compression',
        description: 'Full-length compression for leg support',
        price: 59.99,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Black', 'Gray'],
        stock: 40,
      },
      {
        _id: '5',
        name: 'Combat Shorts Pro',
        category: 'Shorts',
        description: 'Professional-grade fighting shorts',
        price: 99.99,
        sizes: ['M', 'L', 'XL', 'XXL'],
        colors: ['Black', 'White', 'Gray'],
        stock: 25,
      },
      {
        _id: '6',
        name: 'Base Layer Compression',
        category: 'Compression',
        description: 'Perfect base layer for training',
        price: 39.99,
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Black', 'White'],
        stock: 60,
      },
    ];
  };

  const [products, setProducts] = useState(() => getPlaceholderProducts());
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      if (Array.isArray(response.data) && response.data.length > 0) {
        setProducts(response.data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      // Keep showing the instant placeholder catalog if the backend is slow or unavailable.
    }
  };

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const categories = ['All', 'Shorts', 'Compression'];

  return (
    <div className="home">
      <HeroBanner />

      <div className="filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard
              key={product._id}
              product={product}
              onAddToCart={addToCart}
            />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
