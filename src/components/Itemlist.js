import {React }from 'react';
import {allitems} from './Globalproducts';
import {useContext} from 'react';
import {useLocation , NavLink} from "react-router-dom"


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
   
    return (


        <div >
        <NavLink to="/">back to page   </NavLink>

        
        <div className='border border-3 border-black' >
        {allarr[i].map((e,i)=>
        
        (  <div key={i} className='d-flex my-5 border border-3 border-black ' style={{height:"10rem" }}>

        <div>
        <img className='h-100 border border-3 border-black' style={{width:"10rem"}}  src={e.img} alt="img"  />
        </div>

        
        <div className='mx-5 d-flex flex-column justify-content-around align-items-center'>
        <div>{e.company}</div>
        <div>₹{e.price}</div>
        </div>

        </div>
          )
        
        )}
        </div>
        </div>
    );
}

export default Itemlist;
