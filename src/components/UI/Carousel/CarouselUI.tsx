import { Carousel, Stack, Image } from "react-bootstrap";
import Img from "../../../models/img";
import { ProductFull } from "../../../models/product";
import SliderCard from "../Card/SliderCard";
import "./CarouselUI.scss";

type Item = Img | ProductFull;

interface CarouseUIProps {
  items: Item[];
  title: string;
  groupSize: number;
  sizeControlClass: string;
  imgWidth?: string;
  imgHeight?: string;
}

const CarouselUI = ({
  items,
  title,
  groupSize,
  sizeControlClass,
  imgWidth,
  imgHeight,
}: CarouseUIProps) => {
  const groupItems: Item[][] = [];
  for (let i = 0; i < items.length; i += groupSize) {
    groupItems.push(items.slice(i, i + groupSize));
  }

  const defaultItemClasses = ["light-sec-space", "carousel-height"];
  const itemClasses = [...defaultItemClasses, sizeControlClass].join(" ");

  const isProductFull = (item: any): item is ProductFull => {
    return item.name !== undefined;
  };

  const isImg = (item: any): item is Img => {
    return item.alt !== undefined;
  };

  if (isProductFull(items[0])) {
    return (
      <div className={itemClasses}>
        <h2 className="text-dark-green text-center mb-5">{title}</h2>
        <Carousel className="text-center" indicators={false}>
          {groupItems.map((group, index) => (
            <Carousel.Item key={index}>
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={5}
              >
                {group.map((item) => (
                  <SliderCard key={item.id} slide={item as ProductFull} />
                ))}
              </Stack>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  } else if (isImg(items[0])) {
    return (
      <div className={itemClasses}>
        <h2 className="text-dark-green text-center mb-5">{title}</h2>
        <Carousel className="text-center" indicators={false}>
          {groupItems.map((group, index) => (
            <Carousel.Item key={index}>
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={5}
              >
                {group.map((item) => (
                  <Image
                    src={item.imgSrc}
                    style={{ width: imgWidth, height: imgHeight }}
                  />
                ))}
              </Stack>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  } else {
    return <div>Error!</div>;
  }
};

export default CarouselUI;
