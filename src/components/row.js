import Cards from './cards';

import cimg1 from "../assets/items/citem.webp"
import cimg2 from "../assets/items/citem2.webp"
import cimg3 from "../assets/items/citem3.webp"
import cimg4 from "../assets/items/citem4.webp"
import cimg5 from "../assets/items/citem5.webp"

import simg1 from "../assets/items/sitem1.webp"
import simg2 from "../assets/items/sitem2.webp"
import simg3 from "../assets/items/sitem3.webp"
import simg4 from "../assets/items/sitem4.webp"
import simg5 from "../assets/items/sitem5.webp"

import pitem1 from "../assets/items/pitem1.webp"
import pitem2 from "../assets/items/pitem2.webp"
import pitem3 from "../assets/items/pitem3.webp"
import pitem4 from "../assets/items/pitem4.webp"
import pitem5 from "../assets/items/pitem5.webp"



import { useContext } from 'react';
import { inputfield } from '../Frontpage';

import { allitems } from './Globalproducts';
const Row = () => {
const {inp,setInp} = useContext(inputfield);
const {allarr} = useContext(allitems)

    return (

        <div className='border border-danger border-4' >
            <a href="#page1"> {inp}  </a>  
            <div>
            </div>
            <h2>clothes</h2>
            <div className='d-flex justify-content-between overflow-auto'>
                {allarr[0].map(
                    ele => <Cards
                        id={ele.id}
                        price={ele.price}
                        img={ele.img}
                        company={ele.company}
                        qty={ele.qty}
                    />)}

            </div>

            <h2>shoes</h2>
            <div className='d-flex justify-content-between overflow-auto' >
                {allarr[1].map((ele) => (<Cards id={ele.id} price={ele.price} img={ele.img} company={ele.company} qty={ele.qty} />))}

            </div>
            <h2> (Electronic & Phone)</h2>
            <div id='page1' className='d-flex justify-content-between overflow-auto' >
                {allarr[2].map((ele) => (<Cards id={ele.id} price={ele.price} img={ele.img} company={ele.company} qty={ele.qty} />))}
            </div>
           
        </div>


    );
}

export default Row;
