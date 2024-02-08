import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MyButton from "./components/Button/Button";

const App = () => {
  return (
    <>
      <Header />
      <MyButton onClick={()=>console.log('clicked')}>My Button</MyButton>
      <Footer />
    </>
  );
};

export default App;
