import certificates from "../../data/certificateList";
import CarouselUI from "../UI/Carousel/CarouselUI";

const CertificateCarousel = () => {
  return (
    <>
      <CarouselUI
        items={certificates}
        title="Certificates"
        groupSize={1}
        sizeControlClass={"single-slider"}
        imgWidth="13rem"
        imgHeight="20rem"
      />
      <CarouselUI
        items={certificates}
        title="Certificates"
        groupSize={3}
        sizeControlClass={"double-sliders"}
        imgWidth="13rem"
        imgHeight="20rem"
      />
      <CarouselUI
        items={certificates}
        title="Certificates"
        groupSize={5}
        sizeControlClass={"triple-sliders"}
        imgWidth="13rem"
        imgHeight="20rem"
      />
    </>
  );
};

export default CertificateCarousel;
