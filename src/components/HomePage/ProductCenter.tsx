import CarouselUI from "../UI/Carousel/CarouselUI";
import Items from "../UI/ItemList/itemList";

const ProductCenter = () => {
  return (
    <>
      <CarouselUI
        items={Items}
        title={"ProductCenter"}
        groupSize={1}
        sizeControlClass={"single-slider"}
      />
      <CarouselUI
        items={Items}
        title={"ProductCenter"}
        groupSize={2}
        sizeControlClass={"double-sliders"}
      />
      <CarouselUI
        items={Items}
        title={"ProductCenter"}
        groupSize={3}
        sizeControlClass={"triple-sliders"}
      />
    </>
  );
};

export default ProductCenter;
