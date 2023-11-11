import {React }from 'react';
import {allitems} from './Globalproducts';
import {useContext} from 'react';
import {useLocation , NavLink} from "react-router-dom"
import { Cartproducts } from '../App';
import Cards from './cards';
const Itemlist = () => {



    const location = useLocation()
    const name = location.state.e


    
    let i = 2
    if (name==="clothes")
    {i=0}
    else if(name==="shoe")
    {i=1}
    else if (name==="phone")
    {i=2}
    else
    {alert("category not found")}
    
    const {allarr} = useContext(allitems)
   




    const {products,setProducts} = useContext(Cartproducts)



    return (
      <div>

      <div> <NavLink to="/">«Homepage</NavLink></div>
<div className='d-flex  flex-wrap overflow-auto my-5 mx-5'>
          {allarr[i].map((ele) => (
            <Cards
            
            className="m-4"
            key={ele.id}
            id={ele.id}
            price={ele.price}
            img={ele.img}
            company={ele.company}
            qty={ele.qty}
            />
            ))}
      </div>
            </div>
    )
}

export default Itemlist;
