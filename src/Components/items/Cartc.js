import React from 'react'
import Counter from './Counter'
import './Cartc.css'
const Cartc= ({id, img, title, star, reviews, prevPrice, newPrice})=> {
  
   
 
  return (
  
    <div className="cart-card">
    <img src={img} alt={title}  className="cart-img" />
    <h4 className="card-title">{title}</h4>
    <div className="cart-price"><strong>₹</strong>{newPrice}</div>
    <Counter 
        id={id}
      
        />
    </div>
    
  )
}
export default Cartc;
