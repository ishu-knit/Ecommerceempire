import { React} from 'react';
import { Nav } from './components/nav';
import IndividualIntervalsExample from "../src/components/Banner.js"
import Row from './components/row';

import Foter from './components/Foter';



const Frontpage = () => {

  return (
    <div>  
        <Nav />
        <IndividualIntervalsExample />
        <Row/>
        <Foter/>
    </div>
  );
  
}


export default Frontpage;