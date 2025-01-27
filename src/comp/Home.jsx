// comp/Home.jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 100 },
    { id: 4, name: 'Product 4', price: 200 },
  ]);
  
  const [cart, setCart] = useState([]);
  
  const navigate = useNavigate()
  const showCart = () => {
    navigate("/cart")
  }
  return (
    <div>
      <div id="top">
      <h1>E-Toy Store</h1>
      <button onClick={showCart}>Cart</button>
      </div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product`} state={{ product }}> {product.name} - ${product.price}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
