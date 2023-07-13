import React from 'react'
import './Footer.css'
import {FaFacebook,FaInstagram,FaPinterest,FaTwitter} from 'react-icons/fa'
export default function Footer () {
  return (
    <div className='fo-wrapper'>
       <div className='fo-social'>
        <span className='co'> <FaFacebook size={50} /></span>
        <span className='co'> <FaInstagram size={50}/></span>
        <span className='co'><FaTwitter size={50}/></span>
        <span className='co'><FaPinterest size={50}/></span>
       </div>
       <div className='fo-grid'>
        <div>
            <h3>About</h3>
            <span>Company</span>
            <span>Details</span>
            <span>Planning</span>
            <span>About Us</span>
        </div>
        <div>
            <h3>Company</h3>
            <span>Future</span>
            <span>Employment</span>
            <span>Scheduling</span>
            <span>Development</span> 
        </div>
        <div>
            <h3>Legal</h3>
            <span>Hiring</span>
            <span>Terms</span>
            <span>Policies</span>
            <span>Advertising</span>
        </div>
        <div>
            <h3>Information</h3>
            <span>Developers</span>
            <span>Programs</span>
            <span>Funding</span>
            <span>Financial</span>
        </div>
       </div>
    </div>
  )
}
