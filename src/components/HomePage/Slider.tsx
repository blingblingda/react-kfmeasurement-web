import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel data-bs-theme="dark" className='mt-5 mb-5'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt="First slide"
        />
        <Carousel.Caption className='text-white'>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Second slide"
        />
        <Carousel.Caption className='text-white'>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption >
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Third slide"
        />
        <Carousel.Caption className='text-white'>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;