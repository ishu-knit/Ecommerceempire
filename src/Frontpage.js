import {React , useContext }from 'react';
import Nav from './components/nav';
import IndividualIntervalsExample from "../src/components/Banner.js"
import Row from './components/row';

const Frontpage = () => {
    return (
        <div>
          <Nav/> 
          <IndividualIntervalsExample/> 
            <Row/>          
        </div>
    );
}

export default Frontpage;
