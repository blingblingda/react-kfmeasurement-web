import Header from "../Layout/Header/Header";
import StarProducts from "./StarProducts";
import Feature from "./Feature";
import Slider from "./Slider";
import Footer from "../Layout/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <StarProducts />
      <Feature title="My First Feature" />
      <Slider />
      <Footer />
    </>
  );
};

export default HomePage;
