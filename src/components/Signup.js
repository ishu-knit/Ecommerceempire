import React from 'react';
import { NavLink }  from "react-router-dom"
const Signup = () => {
    return (
        <div>
            <NavLink to="/">
                back to page
            </NavLink>

            <div className='container  my-5 w-50' style={{minHeight:"10rem"}}>
                <div className='container border border-3 border-light-subtle rounded my-4 w-75' style={{maxWidth:"20rem"}}>
    

                <h2 className='text-center mb-4'>Create Account </h2>


        <div>
            <label >Your name</label>
            <input type="text"  className='form-control' />
        </div>
        
        <div className='mb-3'>
        <label>Mobile-Number</label>
        <input type="tel" className='form-control' />
        </div>


        <div className="mb-3">
          <label  className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>


        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" placeholder='type your password' className="form-control" id="exampleInputPassword1" />
        </div>

        <button type="submit" className="btn btn-warning w-100 mb-2">Continue</button>

                </div>

                <hr/>

                    <div className='text-center'> Already have account ?
                     <NavLink className="mx-3" to="/login">Login</NavLink>
                    </div>
            </div>


        </div>
    );
}

export default Signup;
