import React, { useState } from 'react'
import "./Navbar.css"
import {LiaShoePrintsSolid} from 'react-icons/lia'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaRegTimesCircle} from 'react-icons/fa'
export default function Navbar() {
  let[click,setclick]=useState(false)
  let handleClick=()=>setclick(!click)
  return (
       < div className='n-wrapper'>
    <div className='n-container'>
    <div className='n-left'>
    <span className='n-logo' ><LiaShoePrintsSolid size={50}/></span>
    <span className='n-name'>Footsie</span>
    </div>
    <div className='n-right'>
        <button className='btn'>
            Signin
        </button>
       <ul className={click ? 'navmenu active':'navmenu'}>
        <li>Home</li>
        <li>Search</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
      <div className='hamburger' onClick={handleClick}>{click ? (<FaRegTimesCircle/>):(<GiHamburgerMenu/>)}</div>
    </div>
    </div>
  </div>

  )
}

