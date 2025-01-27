// comp/Cart.jsx
import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const location = useLocation()
  const { product, unit } = location.state || {}
  
  // use Effect on mount to read localStorage into state cartItems
  
  useEffect ( () => {
    const savedItems = localStorage.getItem("cart");
    setCartItems(savedItems ? JSON.parse(savedItems) : [] )
}, []);
  
  // Append the product to cartItems only once (when product changes)
  useEffect(() => {
    if (product) {
      setCartItems((prev) => [...prev, product]);
    }
  }, [product]);
  
  // Save cartItems to localStorage when cartItems changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);
  
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  
  const navigate = useNavigate()
  
  const checkOut = () => {
    localStorage.removeItem("cart")
    alert("payment is accepted.")
    navigate("/")
  }
  
  const goHome = () => {
    navigate("/")
  }
  return (
    <div>
      <button onClick={checkOut}>Checkout</button>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      <button onClick={goHome}>Go Back</button>
    </div>
  )
}

export default Cart
