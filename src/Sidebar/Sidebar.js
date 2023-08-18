import React from 'react'
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Color";
import "./Sidebar.css";
import { useState } from 'react';
import {HiOutlineFilter} from 'react-icons/hi'

const Sidebar = ({ handleChange }) => {
  let[click,setclick]=useState(false)
  let handleClick=()=>setclick(!click)
  return (
    <div>
      <section className="sidebar">
        <div className="logo-container">
          
          <h1 classname="filter" onClick={handleClick}>{click ? (<HiOutlineFilter size={30}/>) : (<HiOutlineFilter size={30} style={{color:'purple'}}/>)}</h1>
        </div>
        <div className={click ? "hidden active ": "hidden"} >
         <div className='hidden-f'> <Category handleChange={handleChange} /></div>
         <div className='hidden-s'><Price handleChange={handleChange} /></div>
         <div className='hidden-t'><Colors handleChange={handleChange} /></div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
