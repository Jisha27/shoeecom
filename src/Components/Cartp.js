import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { cartContext } from '../App'
import Cartc from './items/Cartc'
import Navbar from './Navbar'
import Footer from './Footer'
import './Cartp.css'
import { Link } from 'react-router-dom'
export const priceContext=React.createContext()
const Cartp=()=> {
    const [price,setPrice]=useState(0)
    const{cart,setCart}=useContext(cartContext)
    const handlePrice=()=>{
      let ans=0
      cart.map((item)=>(
        ans += Number(item.newPrice)
      ))
      setPrice(ans)
    }
    useEffect(()=>{
      handlePrice()
    },[])
  return (
    <div>
    <Navbar/>
    <h1 className='cartp-head'>Cart</h1>
    <div className='cart-button'>
    <Link to={'/'}><button className='btn'>Go back</button></Link>
    <button className='btn'>Pay now</button>
    </div>
    <h2 className='cartp-h2'>{`Total amount : ₹${price}`}</h2>
    <div className='cartp-body'>
    {
cart.map(({id, img, title, star, reviews, prevPrice, newPrice})=>{
    return(
    <priceContext.Provider value={{price,setPrice}}> 
    <Cartc
    key={id}
    id={id}
    img={img}
    title={title}
    star={star}
    reviews={reviews}
    prevPrice={prevPrice}
    newPrice={newPrice}
   
    />
    </priceContext.Provider> 
    )
})}
    </div>
    
    <Footer/>
    </div>
  )
}
export default Cartp;
