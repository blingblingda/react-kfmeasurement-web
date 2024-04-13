import Carousel from "react-bootstrap/Carousel";
import SliderCard from "../Card/SliderCard";
import Items from "../ItemList/itemList";
import { Stack } from "react-bootstrap";

const slides = Items;

const Slider = () => {
  const groupSize = 3;
  const groupSlides = [];
  for (let i = 0; i < slides.length; i = groupSize + i) {
    groupSlides.push(slides.slice(i, i + groupSize));
  }

  return (
    <div className="light-sec-space" style={{ height: "20rem" }}>
      <h2 className="text-dark-green text-center">Products Center</h2>
      <Carousel
        data-bs-theme="light"
        className="text-center"
        indicators={false}
      >
        {groupSlides.map((group, index) => (
          <Carousel.Item key={index}>
            <Stack
              direction="horizontal"
              className="h-100 justify-content-center align-items-center"
              gap={5}
            >
              {group.map((slide) => (
                <SliderCard key={slide.id} slide={slide} />
              ))}
            </Stack>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
