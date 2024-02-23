import Header from "../Layout/Header/Header";
import StarProducts from "./StarProducts";
import Feature from "./Feature";
import Banner from "./Banner";
import Footer from "../Layout/Footer/Footer";
import Slider from "../UI/Carousel/Slider";

const HomePage = () => {
  return (
    <>
      <Header />
      <StarProducts />
      <Feature />
      <Banner />
      <Slider />
      <Footer />
    </>
  );
};

export default HomePage;
