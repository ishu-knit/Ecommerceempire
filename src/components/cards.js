import React from 'react';
import { useState , useEffect } from 'react';
import {  useContext } from 'react';
import { Cartproducts } from '../App';



const Cards = (props) => {


const { products,setProducts } = useContext(Cartproducts);




const Addtocart=()=>{

setProducts((pre)=>{
  const narr = pre.filter(ele=>(ele.id!==props.id));
  return [...narr,props];


})


}




  return (
   
<div>


<div className=' d-flex flex-column border border-dark border-5 mx-3 ' style={{ width: "10rem" }}>
        <div  style={{ height: "200px" }} >
          <img style={{ height: "80%", width: "100%" }} src={props.img} alt="item" />
        </div>

        <div className='companyname my-2'>{props.company}</div>

        <div className='d-flex justify-content-between my-2'>
          <div className=' d-flex align-items-center '>₹{props.price}</div>
          <div className='btn btn-outline-dark btn-sm' onClick={Addtocart} >Add to Cart</div>
        </div>
      </div>

    </div>

  );
}



export default Cards;