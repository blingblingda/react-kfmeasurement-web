import Header from "../Layout/Header/Header";
import Feature from "./Feature";
import Slider from "./Slider";
import Footer from "../Layout/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Feature title="My First Feature" />
      <Slider />
      <Footer />
    </>
  );
};

export default HomePage;
