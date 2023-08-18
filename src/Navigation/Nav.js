
import React from 'react'
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import { Link } from 'react-router-dom';
import { cartContext } from '../App';
import { useContext } from 'react';

const Nav = ({ handleInputChange, query }) => {
  const{cart,setCart}=useContext(cartContext)
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        
          <FiHeart className="nav-icons" />
        
        <Link to='/cart'>
          <AiOutlineShoppingCart className="nav-icons" />
        </Link>
        <div className='cart-length'>{cart.length}</div>
        
          <AiOutlineUserAdd className="nav-icons" />
        
      </div>
    </nav>
  );
};

export default Nav;
