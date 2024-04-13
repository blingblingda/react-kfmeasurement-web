import Header from "../Layout/Header/Header";
import StarProducts from "./StarProducts";
import Banner from "./Banner";
import Footer from "../Layout/Footer/Footer";
import Slider from "../UI/Carousel/Slider";
import Hero from "./Hero";
import WhyUs from "./WhyUs";
import BrandFeature from "./Feature";
import NewCarousel from "../UI/NewCarousel/NewCarousel";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <StarProducts />
      <BrandFeature />
      <Banner />
      <WhyUs />
      <Slider />
      <NewCarousel />
      <Footer />
    </>
  );
};

export default HomePage;
