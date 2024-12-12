import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home1';
import Login from './components/Login';
import Register from './components/Register';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import CategoryList from './components/CategoryList';
import CategoryForm from './components/CategoryForm';
import OrderList from './components/OrderList';
import OrderForm from './components/OrderForm';
import Homepage from  './components/Homepage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the E-commerce App</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product-form" element={<ProductForm />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/category-form" element={<CategoryForm />} />
            <Route path="/orders" element={<OrderList />} />
            <Route path="/order-form" element={<OrderForm />} />
            <Route path='/homepage' element={<Homepage/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
