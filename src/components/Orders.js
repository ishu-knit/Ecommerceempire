import React from 'react'
import { usePDF } from 'react-to-pdf';
import { Cartproducts } from '../App';
import { useContext , useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase';



const auth = getAuth(app)
export default function Orders() {

    const [i,setI]= useState("no_user");

   onAuthStateChanged(auth,user=>{

     
        if (user) {
            const a  = user.email
            setI(a)
        }
        else{
            console.log("no_user")
            // return null
        }
       
    })

// console.log(i)


    return (
    <div>
        {i=="no_user"?<h1>please login first</h1>:
        
        <div>
       
      <Component iid = {i} />
        </div>
        }
    </div>
  )
}


const Component = (props) => {
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    const { products, setProducts } = useContext(Cartproducts);

    console.log(props.idd)
   return (
      <div>
         <div ref={targetRef}>
            <div className='container border border-3 border-danger d-flex flex-column justify-content-center' style={{height:"80vh" , width:"50%" }}>

            <h1 className='text-center my-5'>Order Details</h1>
            <table className='bor'>

                <tbody>

                <tr className='bor' >
                    <td>Name</td>
                    <td>usersname</td>
                </tr>
                <tr className='bor'>
                    <td  >Email</td>
                    <td>{props.iid}</td>
                </tr>
                
                    
                        
                        {products.map((e,i)=>{

                            return(
                                <tr>
                                <td>products {i}</td>
                                <td >{e.company}</td>
                                <td >₹{e.price}</td>
                                </tr>
                                
                            )
                        })}
                  
               
                </tbody>
            </table>
            </div>
         </div>
         <button onClick={() => toPDF()}>Download PDF</button>
      </div>
   )
}
