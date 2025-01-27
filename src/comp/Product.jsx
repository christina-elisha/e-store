// comp/Product.jsx
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Product() {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};
  const [unit, setUnit] = useState(1);
  
  const addCart = () => {
  navigate("/cart", {state:{ product, unit } });
  }
  
  const up = () => {
    setUnit(unit + 1)
  }
  
  const down = () => {
    if (unit > 1) {
    setUnit(unit - 1)
    }
  }

  return (
    <div>
    <button onClick={addCart}>Add to Cart</button>
      <h2>{product.name}</h2>
      <h2>Price: ${product.price}</h2>
      <h2>Unit: { unit }</h2>
      <button className="buttonGroup" onClick={up}>more</button>
      <button className="buttonGroup" onClick={down}>less</button>
    
    </div>
  )
}

export default Product

