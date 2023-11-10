import React from 'react'
import { NavLink } from "react-router-dom"
import { useContext } from 'react';
import { Cartproducts } from '../App';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase';


const auth = getAuth(app);


export default function Cart() {


  const { products, setProducts } = useContext(Cartproducts);
// console.log(products)
  
  const Inc = (p) => {
    setProducts(prevArray => {
      let narr = prevArray.map((ele, ind) => {
        if (ele.id === p.id) {
          let x = ele.qty;
          x = x + 1;
          return { ...ele, qty: x }
        }
        else return { ...ele };
      })
      return narr;
    })
  }

  const dec = (p) => {

    if (p.qty === 1) {
      const arr = products.filter((ele, ind) => (ele.id !== p.id))
      setProducts(arr)
    }


    else {

      setProducts(prevArray => {
        let narr = prevArray.map((ele, ind) => {

          if (ele.id === p.id) {
            let x = ele.qty;
            x = x - 1;
            return { ...ele, qty: x }
          }
          else return { ...ele };

        })
        return narr;
      })
    }
  }



  const total=()=>{

    let sum = 0
    products.map((ele,ind)=>{
      
      return (sum += ele.price*ele.qty)
    })
    return sum
  }

function Addtocart(e) {

   


     onAuthStateChanged(auth,(user=>{

        if (user)
        {
          // send data to firebase with id 

      const res = fetch(
        "https://form-4ab53-default-rtdb.firebaseio.com/from1.json",
        // `https://form-4ab53-default-rtdb.firebaseio.com/${user.email.slice(0,3)}.json`,
                    {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  products,
                  user
                }),
              }
              )
              
              
              alert("send data to database warehouse")
             console.log("here")
            
            }
    
    else
    {alert("Login needed to purchase items")}
}))


// console.log(x)
   


}




return (
  

    <div>

<NavLink to="/">  Homepage </NavLink>


   { (products.length===0)?(
      <div className='text-center h1'>
        Cart is empty
      </div>
    ):(
      <div>

      <div className='container border border-4 border-black w-50 my-5'>
        <h1 className='text-center'>My cart</h1>
        <div className="container   w-75 my-5 ">

          {
            products.map((ele, ind) => (
              <div>


                <div className='d-flex justify-content-between align-items-center border border-top-0 my-4 border-3 border-black rounded-2 m-2'>
                  <div className='w-25'>
                    <img className='w-50 ' src={ele.img} alt="imgd" />
                  </div>

                  <div>
                    <div>{ele.company}</div>
                    <div> ₹{ele.price}</div>
                  </div>

                  <div className='d-flex  align-items-center '>
                    <div className='mx-2 border' onClick={() => Inc(ele)} style={{  cursor: "pointer" , fontWeight:"bolder" }}>+</div>
                    <div>{ele.qty}</div>
                    <div className='mx-2 border' onClick={() => dec(ele)} style={{ cursor: "pointer",fontWeight:"bolder" }}> - </div>
                  </div>

                </div>

              </div>))}

        </div>
        
        <hr />

        <div className='d-flex justify-content-between'>
          <h2>Total Amount :- </h2>
          <h2>{total()}</h2>
        </div>
        <div className='btn btn-outline-primary w-100 my-5 ' onClick={Addtocart}>Checkout</div>

      </div>
          </div>

    )}

    </div>
  )            
}