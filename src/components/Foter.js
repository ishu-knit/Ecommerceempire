import React from 'react';
import { AiFillGithub , AiFillLinkedin , AiFillTwitterCircle } from 'react-icons/ai';


const Foter = () => {
    return (

        <div>

            <div className=' bg-dark text-white d-flex justify-content-around align-items-center   p-3 ' >
            <div className='git'><AiFillGithub size={30} /></div>
            <div className='link'><AiFillLinkedin size={30}  /></div>
            <div className='twit'><AiFillTwitterCircle size={30} /></div>
            </div>
            <div className='bg-dark text-white text-center'>© 2023 EcommerceEmpire, Inc</div>
        </div>
    );
}

export default Foter;
