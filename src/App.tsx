import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MyButton from "./components/Button/Button";
import Slider from "./components/Slider/Slider";
import Symbol from "./components/Symbol/Symbol";
import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <MyButton onClick={()=>console.log('clicked')}>My Button</MyButton>
      <Symbol iconName={ 'Icon9CircleFill'}  text={"descripton of icon"}/>
      <Slider />
      <Footer />
    </>
  );
};

export default App;
