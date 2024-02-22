import Header from "../Layout/Header/Header";
import StarProducts from "./StarProducts";
import Feature from "./Feature";
import Slider from "./Slider";
import Footer from "../Layout/Footer/Footer";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <StarProducts />
      <Feature />
      <Slider />
      <Footer />
    </>
  );
};

export default HomePage;
