import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MyButton from "./components/Button/Button";
import Slider from "./components/Slider/Slider";
import Feature from "./components/Feature/Feature";
import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <MyButton onClick={()=>console.log('clicked')}>My Button</MyButton>
      <Feature title='My First Feature'/>
      <Slider />
      <Footer />
    </>
  );
};

export default App;
