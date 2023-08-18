import React, { useState } from 'react'
import "./Navbar.css"
import {LiaShoePrintsSolid} from 'react-icons/lia'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'
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
        
        
        
       <ul className={click ? 'navmenu active':'navmenu'}>
        
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/Shop'>Shop</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
        <li><Link to='/Sigin'><button className='btn'>Signin</button></Link></li>
        </ul>
      <div className='hamburger' onClick={handleClick}>{click ? (<FaRegTimesCircle/>):(<GiHamburgerMenu/>)}</div>
    </div>
    </div>
  </div>

  )
}

