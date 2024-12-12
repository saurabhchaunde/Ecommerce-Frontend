// src/components/Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Our E-commerce Site</h1>
      <div style={{ marginTop: '20px' }}>
        <h2>Our Services</h2>
        <div style={{ margin: '20px 0' }}>
          <Link to="/products" style={{ marginRight: '10px', textDecoration: 'none', color: 'blue' }}>
            Products
          </Link>
          <Link to="/orders" style={{ marginRight: '10px', textDecoration: 'none', color: 'blue' }}>
            Orders
          </Link>
          <Link to="/categories" style={{ textDecoration: 'none', color: 'blue' }}>
            Categories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
