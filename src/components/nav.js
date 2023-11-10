import { React } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import img from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Cartproducts } from "../App";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase";
const auth = getAuth(app);
// import {auth } from "../../node_modules/firebase"

function Nav() {
  const navigate = useNavigate();

  const [words, setWords] = useState("");
  const { products, setProducts } = useContext(Cartproducts);

  const [login, setLogin] = useState("Login");


  // console.log(allarr)
  const navigator = (e) => {
    // to navigate + pass props
    navigate("/list", { state: { e } });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // for sign in
      if (user) {
        setLogin(user.email);
        console.log("user is sign in ");
      }
      // for sign out
      else {
        setLogin("Login");
        console.log("user is not sign in ");
      }
    });
  }, []);




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
          <NavLink to="/login">{login}</NavLink>
        </div>
        <div>
          <NavLink to="/orders">
          Returns & Orders
          </NavLink>
          
          </div>
        <div className="mx-2">
          <NavLink className="mx-2" to="/cart">
            Cart
            <AiOutlineShoppingCart size={25} color="gold" />
          </NavLink>
          {products.length}
        </div>
      </div>
    </div>
  );
}

export { Nav };
