import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './Hero.css'
export default function Hero() {
  return (
    <div className='hero'>
        <div className='content'>
          <h1>The Brand that sells</h1>
          <p className='search-text'>A shoe is an item of footwear intended to protect and comfort the human foot.High fashion shoes made by famous designers may be made of expensive materials  </p>
          <form className='search'>
             <div> 
                <input type='text' placeholder='Search..'></input>
             </div>
             <div className='radio'>
                
                <button type='submit' className='btn'><AiOutlineSearch className='s-icon'/></button>
             </div>
          </form>
        </div>

    </div>
  )
}
