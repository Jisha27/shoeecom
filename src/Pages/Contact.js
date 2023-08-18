import React from 'react'
import './Contact.css'
import contactimg from '../Assets/henry-perks-BJXAxQ1L7dI-unsplash.jpg'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import {AiFillPhone,AiFillMail} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import Contacta from './Contacta'
export default function Contact() {
  return (
    <div>
    <Navbar/>
    <div className='contact-w'>
         <h1>Contact us</h1>
         
            
     </div>
     <Contacta/>

     <Footer/>   

    </div>
  )
}
