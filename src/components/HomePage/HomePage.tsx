import Header from "../Layout/Header/Header";
import StarProducts from "./StarProducts";
import Banner from "./Banner";
import Footer from "../Layout/Footer/Footer";
import ProductCenter from "./ProductCenter";
import Hero from "./Hero";
import WhyUs from "./WhyUs";
import BrandFeature from "./BrandFeature";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <StarProducts />
      <BrandFeature />
      <Banner />
      <WhyUs />
      <ProductCenter />
      <Footer />
    </>
  );
};

export default HomePage;
