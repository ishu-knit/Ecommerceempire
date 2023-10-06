import React from 'react'
import img from "../assets/logo2.png"
import { NavLink } from 'react-router-dom';
import Signup from './Signup';


export default function signin() {
  return (


    <div className=' container my-5  w-50'>

      <div className='text-center mb-5'>
        <img src={img} alt="logo" width={300} height={100} />
      </div>

      <form className='container w-75 mb-5 px-4 py-3  border border-black rounded ' style={{maxWidth:"20rem"}} >

        <h2>Sign in </h2>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
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
