import React from 'react'
import { NavLink } from "react-router-dom"
import { useContext } from 'react';
import { Cartproducts } from '../App';

export default function Cart() {


  const { products, setProducts } = useContext(Cartproducts);

  
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


  return (


    <div>

<NavLink to="/"> back to page </NavLink>


   { (products.length===0)?(
      <div className='text-center h1'>
        Cart is empty
      </div>
    ):(
      <div>

      <div className='container border border-4 border-black w-50 my-5'>
        <h1 className='text-center'>My cart</h1>
        <div className="container border  border-2 border-primary w-75 my-5 ">

          {
            products.map((ele, ind) => (
              <div>


                <div className='d-flex justify-content-between align-items-center border border-3 border-black rounded-4 m-2'>

                  <div className='w-25'>
                    <img className='w-50 ' src={ele.img} alt="imgd" />
                  </div>

                  <div>
                    <div>{ele.company}</div>
                    <div> ₹{ele.price}</div>
                  </div>

                  <div className='d-flex flex-column align-items-center '>
                    <div onClick={() => Inc(ele)} style={{ cursor: "pointer" }}>+</div>
                    <div>{ele.qty}</div>
                    <div onClick={() => dec(ele)} style={{ cursor: "pointer" }}>-</div>
                  </div>


                </div>

              </div>))}

        </div>
        
        <hr />

        <div className='d-flex justify-content-between'>
          <h2>Total Amount :- </h2>
          <h2>{total()}</h2>
        </div>

      </div>
          </div>

    )}

    </div>
  )            
}