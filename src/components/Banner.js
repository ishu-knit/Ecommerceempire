import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/Banner/banner1.jpg"
import img2 from "../assets/Banner/banner2.jpg"
import img3 from "../assets/Banner/banner3.jpg"
import img4 from "../assets/Banner/banner4.jpg"
import img5 from "../assets/Banner/banner5.jpg"




function IndividualIntervalsExample() {
  const images = [img1, img2, img3, img4, img5]; 
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index} interval={3000}>
          <img src={image} alt="adf" className="w-100" height={250} />
        </Carousel.Item>
      ))}
    </Carousel>
  );

}

export default IndividualIntervalsExample;