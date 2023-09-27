import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import "../src/css/card.css"
import {  Route, Routes } from 'react-router-dom';
import signin from "../src/components/Signin"
import Signup from './components/Signup';
import Frontpage from './Frontpage';
import Cart from './components/Cart';


import { Cartproducts } from './components/Globalproducts';                 
import {  useState } from 'react';



function App() {
const [products, setProducts] = useState([]);

  return (

    <Cartproducts.Provider value={{products , setProducts}} >

    <div className="App">
    <Routes>

      <Route exact path='/' Component={Frontpage}/>
      <Route path='/login' Component={signin}/>
      <Route path='/signup' Component={Signup}/>
      <Route path='/cart' Component={Cart}/> 

    </Routes>
    </div>
    </Cartproducts.Provider>
  );
}

export default App;
export {Cartproducts}