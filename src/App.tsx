import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ProductListPage from "./components/ProductListPage/ProductListPage";
import ProductDetailsPage from "./components/ProductDetailsPage/ProductDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
