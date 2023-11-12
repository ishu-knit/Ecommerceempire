import { React} from 'react';
import { Nav } from './components/nav';
import IndividualIntervalsExample from "../src/components/Banner.js"
import Row from './components/row';
import Foter from './components/Foter';

import Location from './components/loc';



const Frontpage = () => {

  return (
    <div>  
        <Nav />
        <IndividualIntervalsExample />
        <Row/>
        {/* <Location/> recive too many response at that time  */}
        <Foter/>
    </div>
  );
  
}


export default Frontpage;