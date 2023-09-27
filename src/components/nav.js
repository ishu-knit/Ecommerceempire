import {React} from 'react'

import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import img from "../assets/logo.png"
import { NavLink } from 'react-router-dom';
import { Cartproducts } from '../App';
import { useState, useContext } from 'react';

export default function Nav() {


    const {products,setProducts} = useContext(Cartproducts)

    return (
        <div className='sticky-top'>
            <div className='d-flex 
                        justify-content-between
                        align-items-center
                        bg-black 
                        text-white 
                        py-2'>

                <div >
                <img className='rounded-circle' src={img} alt="logo" width={50} height={50}  />
                </div>
                <div style={{background:"#FFBD68" , height:"28px"}}>

                    <input type="text" placeholder='Search for items' />
                    <AiOutlineSearch size={25} />
                </div>
                <div  >    
                <NavLink to="/login">
                Login 
                </NavLink>
                </div>
                <div>
                
                 Returns & Orders</div>
                <div className='mx-2' >
                    <NavLink className="mx-2" to="/cart">
                    Cart
                    </NavLink>
                    <AiOutlineShoppingCart size={25} color="gold" />
                    {products.length}
                </div>

            </div>



        </div>
    )
}
