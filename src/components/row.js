import Cards from './cards';
import { useContext } from 'react';
import { allitems } from './Globalproducts';
import "../css/row.css"

const Row = () => {
    const { allarr } = useContext(allitems);
  






    return (


      <div className='border border-4'>
        <h2 className='fon my-3' >Clothes</h2>
        <div className='d-flex justify-content-between overflow-auto'>
            
            {allarr[0].map((ele) => (
              <Cards
              key={ele.id}
              id={ele.id}
              price={ele.price}
              img={ele.img}
              company={ele.company}
              qty={ele.qty}
            />
          ))}
        </div>
  
        <h2 className='fon my-3' >Shoes</h2>
        <div className='d-flex justify-content-between overflow-auto'>
          {allarr[1].map((ele) => (
            <Cards
              key={ele.id}
              id={ele.id}
              price={ele.price}
              img={ele.img}
              company={ele.company}
              qty={ele.qty}
            />
          ))}
        </div>
  
        <h2 className='fon my-3'>Android Phone</h2>
        <div id='page1' className='d-flex justify-content-between overflow-auto'>
          {allarr[2].map((ele) => (
            <Cards
              key={ele.id}
              id={ele.id}
              price={ele.price}
              img={ele.img}
              company={ele.company}
              qty={ele.qty}
            />
          ))}
        </div>
        <h2 className='fon my-3'>Laptops</h2>
        <div id='page1' className='d-flex justify-content-between overflow-auto'>
          {allarr[3].map((ele) => (
            <Cards
              key={ele.id}
              id={ele.id}
              price={ele.price}
              img={ele.img}
              company={ele.company}
              qty={ele.qty}
            />
          ))}

        
      </div>

      </div>
      
    );
  };
  
  export default Row;