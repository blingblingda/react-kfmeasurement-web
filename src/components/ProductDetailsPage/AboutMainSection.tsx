import { Col, Container, Row } from "react-bootstrap";
import { AboutPictures } from "../UI/ItemList/productAboutList";
import PlateUI from "../UI/Plate/PlateUI";

interface AboutMainSectionProps {
  aboutSrc: [number, number];
}

const AboutMainSection = ({ aboutSrc }: AboutMainSectionProps) => {
  const AboutPictureGroup = [];
  AboutPictureGroup.push(
    AboutPictures[aboutSrc[0]],
    AboutPictures[aboutSrc[1]]
  );

  return (
    <>
      {AboutPictureGroup.map((item) => (
        <PlateUI
          title={item.title}
          imgSrc={item.pic}
          description={item.description}
        />
      ))}
    </>
  );
};

export default AboutMainSection;
