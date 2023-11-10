import Cards from './cards';
import { useContext } from 'react';
// import { inputfield } from '../Frontpage';
import { allitems } from './Globalproducts';




const Row = () => {
const {allarr} = useContext(allitems)


    return (

        <div className='border border-4' >
            {/* <a href="#page1"> {inp}  </a>   */}
            <h2>clothes</h2>
            <div className='d-flex justify-content-between overflow-auto'>
                {allarr[0].map(
                    ele => <Cards
                        id={ele.id}
                        price={ele.price}
                        img={ele.img}
                        company={ele.company}
                        qty={ele.qty}
                    />)}

            </div>

            <h2>shoes</h2>
            <div className='d-flex justify-content-between overflow-auto' >
                {allarr[1].map((ele) => (<Cards id={ele.id} price={ele.price} img={ele.img} company={ele.company} qty={ele.qty} />))}

            </div>
            <h2> (Electronic & Phone)</h2>
            <div id='page1' className='d-flex justify-content-between overflow-auto' >
                {allarr[2].map((ele) => (<Cards id={ele.id} price={ele.price} img={ele.img} company={ele.company} qty={ele.qty} />))}
            </div>
           
        </div>


    );
}

export default Row;
