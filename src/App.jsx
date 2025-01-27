// App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './comp/Home.jsx'
import Cart from './comp/Cart.jsx'
import Product from './comp/Product.jsx'



function App() {
  
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    
  );
};

export default App
