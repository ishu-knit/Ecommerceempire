import { React } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BiPurchaseTagAlt } from "react-icons/bi";
import img from "../assets/elogo.png";

import { NavLink } from "react-router-dom";
import { Cartproducts } from "../App";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";


import {logincustomer } from "./Globalproducts";

function Nav() {
  const navigate = useNavigate();

  const [words, setWords] = useState("");
  const { products, setProducts } = useContext(Cartproducts);

  const [login, setLogin] = useState("Login");


  // console.log(allarr)
  const navigator = (e) => {
    // to navigate + pass props

    if(e=="clothes" || e=="shoe" || e=="phone"|| e=="laptops")
    {
      navigate("/list", { state: { e } });
    }
    else{
        alert("category not found")
    }
  };

const {userid,setUserid} = useContext(logincustomer)


useEffect(() => {

  if (userid!=="Login")
  {
    setLogin(userid)
  }
  else{
    setLogin("Login")
  }
  
}, []);
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     // for sign in
  //     if (user) {
  //       setLogin(user.email);
  //       console.log("user is sign in ");
  //     }
  //     // for sign out
  //     else {
  //       setLogin("Login");
  //       console.log("user is not sign in ");
  //     }
  //   });
  // }, []);




  return (
    <div className="sticky-top">
      <div
        className="d-flex 
                        justify-content-between
                        align-items-center
                        bg-black 
                        text-white 
                        py-2"
      >
        <div>
          <img
            className="rounded-circle"
            src={img}
            alt="logo"
            width={50}
            height={50}
          />
        </div>

        <div style={{ background: "#FFBD68", height: "28px" }}>
          <input
          style={{backgroundColor:"black" , color:"white" , outline:"none" , border:"none" }}
            type="text"
            name="info"
            placeholder="Search for items"
            value={words}
            onChange={(e) => {
              setWords(e.target.value);
            }}
          />
          <AiOutlineSearch size={25} onClick={() => navigator(words)} />
        </div>

        <div>
            <BiUserCircle size={25}/>
          <NavLink to="/login">
            
            {login}
            
            </NavLink>
        </div>
        <div>
           <BiPurchaseTagAlt size={24} /> 
          <NavLink to="/orders">
          Returns & Orders
          </NavLink>
          
          </div>
        <div className="mx-2">
          <NavLink className="mx-2" to="/cart">
          <AiOutlineShoppingCart size={25} color="white" />
            Cart
          </NavLink>
          {products.length}
        </div>
      </div>
    </div>
  );
}

export { Nav };
