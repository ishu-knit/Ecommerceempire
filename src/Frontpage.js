import {React , useState}from 'react';
import {Nav } from './components/nav';
import IndividualIntervalsExample from "../src/components/Banner.js"
import Row from './components/row';
import { inputfield , Items  } from './components/Globalproducts';




const Frontpage = () => {

    const [inp, setInp] = useState("");



    return (
        <div>
        <Items>

        <inputfield.Provider value={{inp,setInp}}>
          <Nav /> 
          <IndividualIntervalsExample/> 
          <Row />   
        </inputfield.Provider>  

        </Items>
        </div>
    );
}


export default Frontpage;
export {inputfield}
