import {React }from 'react';
import {allitems} from './Globalproducts';
import {useContext} from 'react';
import {useLocation , NavLink} from "react-router-dom"


const Itemlist = () => {



    const location = useLocation()
    // console.log(location.state.e)
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

        
        <div className='border border-3 border-danger' >
        {allarr[i].map((e,i)=>
        
        (  <div className='d-flex my-5 border border-3 border-primary ' style={{height:"15rem"}}>

        <div  >
        <img className='h-100'  src={e.img} alt="img"  />

        </div>
        <div className='mx-5'>
        <div>
             {e.company}
        </div>
        <div>
        ₹{e.price}
        </div>

        </div>



        </div>
          )
        
        )}
        </div>
        </div>
    );
}

export default Itemlist;
