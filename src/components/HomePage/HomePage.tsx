import Header from "../Layout/Header/Header";
import MyButton from "../UI/Button/Button";
import Feature from "./Feature";
import Slider from "./Slider";
import Footer from "../Layout/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <MyButton onClick={() => console.log("clicked")}>My Button</MyButton>
      <Feature title="My First Feature" />
      <Slider />
      <Footer />
    </>
  );
};

export default HomePage;
