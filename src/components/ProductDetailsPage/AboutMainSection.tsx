import { AboutPictures } from "../../data/productAboutList";
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
      {AboutPictureGroup.map((item, index) => (
        <PlateUI
          title={item.title}
          imgSrc={item.pic}
          description={item.description}
          isReverse={index % 2 !== 0}
          isBgWhite={true}
        />
      ))}
    </>
  );
};

export default AboutMainSection;
