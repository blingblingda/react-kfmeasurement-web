import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import WhyBanner from "./WhyBanner";
import WhyJourney from "./WhyJourney";
import BrandStoryVideo from "./BrandStoryVideo";
import CompanyCulture from "./CompanyCulture";
import Strategy from "./Strategy";
import CarouselUI from "../UI/Carousel/CarouselUI";
// import Partnership from "./Partnership";
// import CertificateCarousel from "./CertificateCarousel";
import Img from "../../models/img";
import items from "../UI/ItemList/certificateList";

const WhyPage = () => {
  return (
    <>
      <Header />
      <main className="bg-light-grey">
        <WhyBanner />
        <BrandStoryVideo />
        <CompanyCulture />
        <WhyJourney />
        {/* <CertificateCarousel /> */}
        <Strategy />
        {/* 
        <Partnership /> */}
      </main>
      <Footer />
      <CarouselUI
        items={items}
        title={"test"}
        groupSize={2}
        sizeControlClass={"bg-black"}
        imgWidth={"10rem"}
        imgHeight={"20rem"}
      />
    </>
  );
};

export default WhyPage;
