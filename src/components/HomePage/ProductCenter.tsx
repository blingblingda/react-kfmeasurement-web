import CarouselUI from "../UI/Carousel/CarouselUI";
import itemList from "../../data/itemList";

const ProductCenter = () => {
  return (
    <>
      <CarouselUI
        items={itemList}
        title={"Product Center"}
        groupSize={1}
        sizeControlClass={"single-slider"}
      />
      <CarouselUI
        items={itemList}
        title={"Product Center"}
        groupSize={2}
        sizeControlClass={"double-sliders"}
      />
      <CarouselUI
        items={itemList}
        title={"Product Center"}
        groupSize={3}
        sizeControlClass={"triple-sliders"}
      />
    </>
  );
};

export default ProductCenter;
