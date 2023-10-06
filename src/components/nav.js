import {React} from 'react'

import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import img from "../assets/logo.png"
import { NavLink } from 'react-router-dom';
import { Cartproducts } from '../App';
import { useState, useContext } from 'react';
import { inputfield } from "../Frontpage";


function Nav() {
    
    const [words, setWords] = useState("");
    const {products,setProducts} = useContext(Cartproducts)
    const {inp,setInp} = useContext(inputfield);

    
    
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
                    <input type="text" name="info" placeholder='Search for items' value={words} onChange={(e)=>{setWords(e.target.value)}} />
                    <AiOutlineSearch size={25} onClick={()=>setInp(words)} />
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

export {Nav };