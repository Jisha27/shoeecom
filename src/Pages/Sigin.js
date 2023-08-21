import React from 'react'
import './Sigin.css'
import {Link} from 'react-router-dom'
import Navbar from '../Components/Navbar'

export default function Sigin() {
  return (
    <div className='sigin-cover'>
      <Navbar/>
    <div className='sigin'>
        <form className='form'>
          
          <table>
            
            <tr>
              <td><label htmlFor='email' className='label'>Email:</label></td>
             <td> <input type='text' id='email'/></td>
          </tr>
          <tr>
             <td><label htmlFor='password' className='label'>Password:</label></td>
             <td><input type='text' id='password' /></td>
          </tr>
          
        <tr>
             <td> <div className='btn-about'><button className='btn' >Submit</button>
             <Link to='/Register'><button className='btn' >Register</button></Link></div></td>
          </tr>
          <tr>
            <td><p className='notmem'>*Not Member? Register</p></td>
          </tr>
          
          </table>
          

        </form>





    </div>
  
    </div>
  )
}
