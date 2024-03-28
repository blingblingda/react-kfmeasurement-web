import certificateList from "../UI/ItemList/certificateList";
import CarouselUI from "../UI/Carousel/CarouselUI";

const CertificateCarousel = () => {
  return (
    <CarouselUI
      items={certificateList}
      title="Certificates"
      imgWidth="10rem"
      imgHeight="15rem"
    />
  );
};

export default CertificateCarousel;
