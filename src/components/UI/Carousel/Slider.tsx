import Carousel from "react-bootstrap/Carousel";
import SliderCard from "../Card/SliderCard";
import Star_1 from "../../../assets/star_1.png";
import Star_2 from "../../../assets/star_2.png";
import Star_3 from "../../../assets/star_3.png";
import Star_4 from "../../../assets/star_4.png";
import { Stack } from "react-bootstrap";

const slides = [
  {
    id: 1,
    description: "This is product 1",
    imgSrc: Star_1,
  },
  {
    id: 2,
    description: "This is product 2",
    imgSrc: Star_2,
  },
  {
    id: 3,
    description: "This is product 3",
    imgSrc: Star_3,
  },
  {
    id: 4,
    description: "This is product 4",
    imgSrc: Star_4,
  },
  {
    id: 5,
    description: "This is product 5",
    imgSrc: Star_1,
  },
  {
    id: 6,
    description: "This is product 6",
    imgSrc: Star_2,
  },
  {
    id: 7,
    description: "This is product 7",
    imgSrc: Star_2,
  },
  {
    id: 8,
    description: "This is product 8",
    imgSrc: Star_2,
  },
  {
    id: 9,
    description: "This is product 9",
    imgSrc: Star_2,
  },
];

function Slider() {
  const groupSize=3;
  const groupSlides =[];
  for (let i = 0; i<slides.length; i=groupSize + i){
    groupSlides.push(slides.slice(i, i + groupSize));
  }

  return (
    <div>
      <h3 className="text-dark-green text-center">Slider Title Here</h3>
      <Carousel data-bs-theme="light" className="mt-5 mb-5 text-center" indicators={false}>
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
}

export default Slider;
