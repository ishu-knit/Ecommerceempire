import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from "../../node_modules/react-bootstrap/Carousel";
import img1 from "../assets/Banner/banner1.jpg"
import img2 from "../assets/Banner/banner2.jpg"
import img3 from "../assets/Banner/banner3.jpg"
import img4 from "../assets/Banner/banner4.jpg"
import img5 from "../assets/Banner/banner5.jpg"



function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img src={img1} alt="adf" className='w-100' height={250} />
      </Carousel.Item>


      <Carousel.Item interval={3000}>
        <img src={img2} alt="adf" className='w-100 ' height={250} />
      </Carousel.Item>
      
      
      <Carousel.Item interval={3000}>
      <img src={img3} alt="adf" className='w-100' height={250} />
      </Carousel.Item>
    
      <Carousel.Item interval={3000}>
      <img src={img4} alt="adf" className='w-100' height={250} />
      </Carousel.Item>
    

      <Carousel.Item interval={3000}>
      <img src={img5} alt="adf" className='w-100' height={250} />
      </Carousel.Item>
    

    </Carousel>
  );
}

export default IndividualIntervalsExample;