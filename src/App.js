import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import "../src/css/card.css"
import "../src/css/Orders.css"
import "../src/css/Footer.css"
import { Route, Routes } from 'react-router-dom';

// compoenents
import Signin from './components/Signin';
import Signup from './components/Signup';
import Frontpage from './Frontpage';
import Cart from './components/Cart';
import Orders from './components/Orders';


import { Cartproducts, Items } from './components/Globalproducts';
import Itemlist from './components/Itemlist';
import { useState } from 'react';





function App() {


  const [products, setProducts] = useState([]);

  
  return (
  

  
    <div className="App">
      <Cartproducts.Provider value={{ products, setProducts }} >
        <Items>
          <Routes>
            <Route exact path='/' Component={Frontpage} />
            <Route path='/login' Component={Signin} />
            <Route path='/signup' Component={Signup} />
            <Route path='/cart' Component={Cart} />
            <Route path='/list' Component={Itemlist} />
            <Route path="/orders" Component={Orders}/>
          </Routes>
        </Items>
      </Cartproducts.Provider>
    </div>
  );
}


export default App;
export { Cartproducts }