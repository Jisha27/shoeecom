import React from 'react'
import './Featured2.css'
import house1 from '../Assets/spacejoy-uGWNcejbf2E-unsplash.jpg'
import housereal from '../Assets/vu-anh-TiVPTYCG_3E-unsplash.jpg'
import house2 from '../Assets/jason-wang-5MG8cQbw-T8-unsplash.jpg'
import house3 from '../Assets/spacejoy-NrdwhqreL8M-unsplash.jpg'
import house4 from '../Assets/spacejoy-3z_61bnbFhM-unsplash.jpg'
export default function Featured2() {
  return (
    <div className='featured'>
        
        <div className='f-container'>
           <div className='one'> <img src={housereal} alt=''></img></div>
           <div className='two'> <img src={house1} alt=''></img></div>
           <div className='three'><img src={house2} alt=''></img></div>
           <div className='four'><img src={house3} alt=''></img></div>
           <div className='five'><img src={house4} alt=''></img></div>

        </div>
        <div className='f-details'>
           <div className='f-left'>
           <h4>123 Acme St. Dallas,TX</h4>
           <p>House for Sale</p>
           <p>$2,677,000</p>
           <p>5 <strong>Bedrooms</strong></p>
           <p>7 <strong>Bathrooms</strong></p>
           <p>8,138 <strong>Square Feet</strong></p>
           <p>$14,797/mo <strong> Est Payment</strong></p>
           </div>
           <div className='f-right'>
              <p> This top-floor, two-bedroom luxury apartment comes with a 12 sqm conservatory terrace which can be opened in summer. This was renovated with the most modern technology, and ceiling / wall heating and cooling ensure the desired temperature. All appliances are built into the kitchen and the equipment is part of the purchase price; all of which are luxury brand pieces.</p>
              <button className='btn'>View Listing</button>
           </div>
        </div>

    </div>

  )
}