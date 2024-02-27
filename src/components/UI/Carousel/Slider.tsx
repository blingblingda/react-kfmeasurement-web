import Carousel from "react-bootstrap/Carousel";
import SliderCard from "../Card/SliderCard";
import P_01 from "../../../assets/ProductsCenter/p01.png";
import P_02 from "../../../assets/ProductsCenter/p02.png";
import P_03 from "../../../assets/ProductsCenter/p03.png";
import P_04 from "../../../assets/ProductsCenter/p04.png";
import P_05 from "../../../assets/ProductsCenter/p05.png";
import P_06 from "../../../assets/ProductsCenter/p06.png";
import P_07 from "../../../assets/ProductsCenter/p07.png";
import P_08 from "../../../assets/ProductsCenter/p08.png";
import P_09 from "../../../assets/ProductsCenter/p09.png";
//图片引用至矿用仪器仪表系列第一页

import { Stack } from "react-bootstrap";

const slides = [
  {
    id: 1,
    description:
      "Laser X-ray Surface Density Online Measurement Integrated Machine",
    imgSrc: P_01,
  },
  {
    id: 2,
    description: "X/β-ray Surface Density Measurement Instrument Series",
    imgSrc: P_02,
  },
  {
    id: 3,
    description:
      "XCH12000 Low-light Spot X-ray Surface Density Measurement Instrument",
    imgSrc: P_03,
  },
  {
    id: 4,
    description: "BCH25100 β-ray Surface Density Measurement Instrument",
    imgSrc: P_04,
  },
  {
    id: 5,
    description:
      "XCH-5000 Ultra-soft X-ray Surface Density Measurement Instrument",
    imgSrc: P_05,
  },
  {
    id: 6,
    description: "XCH12000 X-ray Surface Density Measurement Instrument",
    imgSrc: P_06,
  },
  {
    id: 7,
    description:
      "KJ841 Mining Coal Natural γ-Ray Ash Content Measurement System",
    imgSrc: P_07,
  },
  {
    id: 8,
    description: "VIS Intelligent Dry Sorting Machine",
    imgSrc: P_08,
  },
  {
    id: 9,
    description: "CSW127 Moisture Analyzer",
    imgSrc: P_09,
  },
];

function Slider() {
  const groupSize = 3;
  const groupSlides = [];
  for (let i = 0; i < slides.length; i = groupSize + i) {
    groupSlides.push(slides.slice(i, i + groupSize));
  }

  return (
    <div className="light-sec-space">
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
}

export default Slider;
