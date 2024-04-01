import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ProductListPage from "./components/ProductListPage/ProductListPage";
import ProductDetailsPage from "./components/ProductDetailsPage/ProductDetailsPage";
import CasePage from "./components/CasePage/CasePage";
import WhyPage from "./components/WhyPage/WhyPage";
import ContactUsPage from "./components/ContactUsPage/ContactUsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/:caseName" element={<CasePage />} />
        <Route path="/why-us" element={<WhyPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
