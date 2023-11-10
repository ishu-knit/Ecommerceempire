import React from 'react'
import img from "../assets/logo2.png"
import { NavLink } from 'react-router-dom';
import { useState , useContext } from 'react';
import { Cartproducts } from '../App';
import { logincustomer} from './Globalproducts';


import { getAuth,signOut, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase';




const auth = getAuth(app);


export default function Signin() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

const {products,setProducts} = useContext(Cartproducts)

  
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const login =  (e) => {
    e.preventDefault();
    const {email,password } = user

    signInWithEmailAndPassword(auth,email, password)
    .then(y=>{
      console.log(y)
      setUserid(y.user.email)  
      alert("login successfully")
    
    })
    .catch(e=>{
    console.log(e)
      alert("login failed")
    })


  };


  const logout=()=>{
    signOut(auth)
    setProducts([])
    alert("logout successfully")
    setUserid("Login")
  }


  const {userid,setUserid} = useContext(logincustomer);

  // console.log(userid)
  return (
    <div className='container my-5 w-50'>
      <div className='text-center mb-5'>
        <img src={img} alt="logo" width={300} height={100} />
      </div>

      <form method='POST' className='container w-75 mb-5 px-4 py-3 border border-black rounded' style={{ maxWidth: "20rem" }}>
        <h2>Sign in</h2>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" name="password" value={user.password} onChange={handleChange} className="form-control" />
        </div>

        <button type="submit" className="btn btn-warning w-100 mb-2" onClick={login}>Login</button>
        
        <div className=''>
          new customer?
          <NavLink to="/signup">
            Sign up
          </NavLink>
        </div>

        <NavLink to="/">
          back to page
        </NavLink><br></br>
        <div className='btn btn-outline-danger my-2' onClick={logout}>signout</div>
      </form>
    </div>
  );
}


