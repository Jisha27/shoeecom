import React from 'react'
import './Card.css'
import { BsFillBagFill } from "react-icons/bs";

import { useContext } from 'react';
import { cartContext } from '../../App';


const Card = ({ id,img, title, star, reviews, prevPrice, newPrice }) => {
  const{cart,setCart}=useContext(cartContext)
  
const handleCart=(id,img, title, star, reviews,  newPrice)=>{
  let isPresent = false;
  cart.forEach(element => {
    if(id===element.id)
    isPresent=true;
    
  
  });
  if(isPresent){
   alert('already added this')
  }else{
    setCart((previtems)=> [
            {
                id:id,
                img:img,
                title:title,
                star:star,
                reviews:reviews,
                newPrice:newPrice,
                
            
            },...previtems])
  }

 
  
}
  return (
   
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            
            <button className='card-button' onClick={()=>handleCart(id,img, title, star, reviews,  newPrice)}>
                      <BsFillBagFill className="bag-icon" color='white' />
            </button>
          </section>
        </div>
      </section>
   
  );
};

export default Card;
