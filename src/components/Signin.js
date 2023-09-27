import React from 'react'
import img from "../assets/logo2.png"
import { NavLink } from 'react-router-dom';
import Signup from './Signup';


export default function signin() {
  return (
    <div className='my-5'>

<div className='text-center'>

<img src={img} alt="logo"  width={300} height={100}/>
</div>

    <form className='container w-25 mb-5 px-4 py-3  border border-black rounded ' >

    <h2>Sign in </h2>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-warning w-100 mb-2">Submit</button>
   <div className=''>
    new customer?
    <NavLink to="/signup">
    Sign up 
    </NavLink>
   </div>
   

   <NavLink to="/">
    back to page
   </NavLink>
</form>
    
    

    </div>
  )
}
