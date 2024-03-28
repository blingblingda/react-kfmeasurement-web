import { Carousel, Stack } from "react-bootstrap";
import Img from "../../../models/img";
import Image from "react-bootstrap/Image";

interface CarouseUIProps {
  items: Img[];
  title: string;
  imgWidth: string;
  imgHeight: string;
}

const chunkArray = (array: Img[], size: number) => {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

const CarouselUI = ({ items, title, imgWidth, imgHeight }: CarouseUIProps) => {
  const groupItems: Img[][] = chunkArray(items, 5);

  return (
    <div className="bg-light-grey">
      <h2 className="text-center fs-2 text-dark-green pt-5">{title}</h2>
      <div className="container-fluid">
        <Carousel style={{ height: 400 }}>
          {groupItems.map((group) => (
            <Carousel.Item className="pt-5">
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={3}
              >
                {group.map((Item) => (
                  <Image
                    src={Item.imgSrc}
                    style={{ width: imgWidth, height: imgHeight }}
                  />
                ))}
              </Stack>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselUI;
