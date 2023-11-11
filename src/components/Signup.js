import React from "react";
import { NavLink } from "react-router-dom";
import {useState} from "react";

import {createUserWithEmailAndPassword,  GoogleAuthProvider , signInWithPopup, getAuth } from "firebase/auth";
import { app } from '../firebase';


const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();


const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const send = (e) => {
    const { name, phone, email, password } = user;
    e.preventDefault();
createUserWithEmailAndPassword(auth, email, password)
.then((y)=>alert("account created"))
.catch((x)=>console.log("error",x));
    
  };



  const getusersdata = (e) => {
    setUser({ ...user,[e.target.name]: e.target.value });
  };


  const signwithgoogle=()=>{

    signInWithPopup(auth,googleprovider)
  }
  return (
    <div>
      <NavLink to="/">«Homepage</NavLink>

      <div className="container  my-5 w-50" style={{ minHeight: "10rem" }}>
        <div
          className="container border border-3 border-light-subtle rounded my-4 w-75"
          style={{ maxWidth: "20rem" }}
        >
          <h2 className="text-center mb-4">Create Account </h2>

          <div>
            <label>Your name</label>
            <input
              type="text"
              name="name"
              onChange={getusersdata}
              value={user.name}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Mobile-Number</label>
            <input
              type="number"
              name="phone"
              onChange={getusersdata}
              value={user.phone}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              onChange={getusersdata}
              value={user.email}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={getusersdata}
              value={user.password}
              placeholder="type your password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button
            type="submit"
            onClick={send}
            className="btn btn-warning w-100 mb-2"
          >
            Continue
          </button>
        <div className="btn btn-outline-primary w-100 mb-3" onClick={signwithgoogle}> sign in with google</div>
        </div>

        <hr />

        <div className="text-center">
          {" "}
          Already have account ?
          <NavLink className="mx-3" to="/login">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Signup;
