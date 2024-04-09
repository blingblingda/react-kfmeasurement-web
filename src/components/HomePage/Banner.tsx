import { Container, Carousel } from "react-bootstrap";
import banner_1 from "../../assets/banner_1.jpg";
import banner_2 from "../../assets/banner_2.jpg";

const Banner = () => {
  return (
    <>
      <Container className="light-sec-space">
        <Carousel fade controls={false} indicators>
          <Carousel.Item>
            <img
              className="d-block"
              style={{ width: "100rem", height: "30rem" }}
              src={banner_1}
              alt="First slide"
            />
            <Carousel.Caption className="text-white">
              <h2>Technical talent is the core</h2>
              <p>
                Customer satisfaction comes first, with a focus on engineering
                quality.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ width: "100rem", height: "30rem" }}
              src={banner_2}
              alt="Second slide"
            />
            <Carousel.Caption className="text-white">
              <h2>National High-Tech Enterprise</h2>
              <p>
                Contributing to the automation construction in building
                materials, coal, metallurgy, electricity, chemical engineering
                and many more industries.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default Banner;
