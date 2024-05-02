import logos from "../../data/logoList";
import CarouselUI from "../UI/Carousel/CarouselUI";

const Partnership = () => {
  return (
    <>
      <CarouselUI
        items={logos}
        title="Partnership"
        groupSize={1}
        sizeControlClass={"single-slider"}
        imgWidth="10rem"
        imgHeight="10rem"
      />
      <CarouselUI
        items={logos}
        title="Partnership"
        groupSize={3}
        sizeControlClass={"double-sliders"}
        imgWidth="10rem"
        imgHeight="10rem"
      />
      <CarouselUI
        items={logos}
        title="Partnership"
        groupSize={5}
        sizeControlClass={"triple-sliders"}
        imgWidth="10rem"
        imgHeight="10rem"
      />
    </>
  );
};

export default Partnership;
