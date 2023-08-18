import React from 'react'
import './Register.css'
import {Link} from 'react-router-dom'
import Navbar from '../Components/Navbar'
export default function Register() {
  return (
    <div>
      <Navbar/>
    <div className='sigin'>
        <form className='form'>
          
          <table>
          <tr>
              <td><label htmlFor='Name' className='label'>Name:</label></td>
             <td> <input type='text' id='Name'/></td>
          </tr>
            <tr>
              <td><label htmlFor='email' className='label'>Email:</label></td>
             <td> <input type='text' id='email'/></td>
          </tr>
          <tr>
             <td><label htmlFor='password' className='label'>Password:</label></td>
             <td><input type='text' id='password' /></td>
          </tr>
          <tr>
             <td><label htmlFor='c-password' className='label'>Confirm Password:</label></td>
             <td><input type='text' id='c-password' /></td>
          </tr>
          
        <tr>
             <td> <div className='btn-about'><Link to='/Sigin' ><button className='btn' >Submit</button></Link>
             <Link to='/Sigin'><button className='btn'>Signin</button></Link>
             </div></td>
          </tr>
          <tr>
            <td><p className='notmemr'>*Already Member? Signin</p></td>
          </tr>
          
          </table>
          

        </form>





    </div>
    </div>
  )
}