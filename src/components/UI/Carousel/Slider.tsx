import Carousel from "react-bootstrap/Carousel";
import SliderCard from "../Card/SliderCard";
import Items from "../ItemList/itemList";
import { Stack } from "react-bootstrap";
import { ProductFull } from "../../../models/product";
import "./Slider.css";

const Slider = () => {
  return (
    <>
      <SliderWithGroup
        groupSize={1}
        slides={Items}
        extraClass={"single-slider"}
      />
      <SliderWithGroup
        groupSize={2}
        slides={Items}
        extraClass={"double-sliders"}
      />
      <SliderWithGroup
        groupSize={3}
        slides={Items}
        extraClass={"triple-sliders"}
      />
    </>
  );
};

interface SliderWithGroupProps {
  groupSize: number;
  slides: ProductFull[];
  extraClass: string;
}

const SliderWithGroup = ({
  groupSize,
  slides,
  extraClass,
}: SliderWithGroupProps) => {
  const groupSlides = [];
  for (let i = 0; i < slides.length; i = groupSize + i) {
    groupSlides.push(slides.slice(i, i + groupSize));
  }
  const defaultSliderClasses = ["light-sec-space", "slider-height"];
  const sliderClasses = [...defaultSliderClasses, extraClass].join(" ");

  return (
    <div className={sliderClasses}>
      <h2 className="text-dark-green text-center mb-5">Products Center</h2>
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
