import React, { useState } from 'react'
import { useContext } from 'react'
import { priceContext } from '../Cartp'
import { cartContext } from '../../App'
import './Counter.css'
// import { quantContext } from '../../App'
 const Counter=({id})=> {
    const{cart,setCart}=useContext(cartContext)
    // const {quant,setQuant}=useContext(quantContext)
    let {price,setPrice}=useContext(priceContext)
    const [count,setCount]=useState(1)
    const handleadd=(id)=>{
      let newp=0
      setCount(count+1)
      cart.forEach((product)=>{
        if(product.id===id){
          newp=Number(product.newPrice)
        }
      })
      setPrice(price+newp)
      
   
    }
   
    const handleDecrement=()=>{
        if(count<=1){
        const arr=cart.filter((item)=>item.id!==id)
        setCart(arr)
      }
        else{
            setCount(count-1)
        }
    }
   
  return (
    <div className='counter-container'>
    <button onClick={()=>handleadd(id)} className='counter-button'>+</button>
    <p>{count}</p>
    <button onClick={()=>handleDecrement(id)} className='counter-button'>-</button>
    
    </div>
  )
}
export default Counter;