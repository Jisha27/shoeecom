import React from 'react'
import './Contacta.css'
import {AiFillPhone,AiFillMail} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import contactimg from '../Assets/henry-perks-BJXAxQ1L7dI-unsplash.jpg'
export default function Contacta() {
  return (
    <div className='wrapper-contact'>
         <div className='one'>
              <img src={contactimg}/>
              </div>
             <div className='two'>
                 <h1>Meet us</h1>
                 <div><AiFillPhone/><span>+9145983998</span></div>
                 <div><AiFillMail/><span>spanourbrand@footsie.com</span></div>
                 <div><ImLocation/><span>world trade centre,5th floor</span></div>
                 
             </div>
             <div className='three'>
              <h1>
                Pitch us
              </h1>
              <p>Send your queries at queries2021@footsie.com</p>
             </div>
    </div>
  )
}
