import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import banner_1 from "../../assets/banner_1.png";
import banner_2 from "../../assets/banner_2.png";

function Banner() {
  return (
    <Container className="p-5">
    <Carousel fade controls={false} indicators>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner_1}
          alt="First slide"
        />
        <Carousel.Caption className='text-white'>
          <h2>Technical talent is the core</h2>
          <p>Customer satisfaction comes first, with a focus on engineering quality.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner_2}
          alt="Second slide"
        />
        <Carousel.Caption className='text-white'>
          <h2>National High-Tech Enterprise</h2>
          <p>Contributing to the automation construction in building materials, coal, metallurgy, electricity, chemical engineering and many more industries.</p>
        </Carousel.Caption >
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default Banner;
