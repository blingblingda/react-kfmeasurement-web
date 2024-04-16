import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import ProductList from "./ProductList";
import ProductFilter from "./ProductFilter";
import Items from "../UI/ItemList/itemList";
import { ProductFull } from "../../models/product";

const ProductListPage = () => {
  const products: ProductFull[] = Items;

  const [filteredItems, setFilteredItems] = useState(products);
  const [queryKeywords, setQueryKeywords] = useState([] as string[]);
  const navigate = useNavigate();

  const location = useLocation();
  const category = location.state.category;

  useEffect(() => {
    if (category && category !== "") {
      setQueryKeywords([category]);
    } else {
      setQueryKeywords([]);
    }
  }, [category]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    const isChecked = event.target.checked;
    const category = event.target.id;

    if (isChecked) {
      setQueryKeywords([...queryKeywords, category]);
    } else {
      setQueryKeywords(queryKeywords.filter((keyword) => keyword !== category));
    }
  };

  useEffect(() => {
    if (queryKeywords.length === 0) {
      setFilteredItems(products);
    } else {
      setFilteredItems(
        products.filter((product) => queryKeywords.includes(product.category))
      );
    }
  }, [products, queryKeywords]);

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <>
      <Header />
      <main className="bg-light-grey">
        <Container className="px-0">
          <Col className="py-4 px-4 list-unstyled d-flex justify-content-start">
            <li className="path-text" onClick={handleHomeClick}>
              Home
            </li>
            <li className="li-before text-dark-green">Products</li>
          </Col>
        </Container>
        <Container className="py-4">
          <Row className="justify-content-center">
            <Col sm={12} md={12} lg={3} className="bg-light-grey">
              <ProductFilter
                catSelect={handleCheckboxChange}
                selectedCategories={queryKeywords}
              />
            </Col>
            <Col sm={12} md={12} lg={9}>
              <ProductList filteredItems={filteredItems} />
            </Col>
          </Row>
        </Container>
        <Container className="py-5">
          <small
            className="d-inline-block w-50 text-grey "
            style={{ lineHeight: "1.75" }}
          >
            KFCK adheres to the principles of prioritizing quality and
            customer-first, and strictly follows the ISO9001 quality management
            system for design, development, production, and installation. Every
            process, from component screening upon arrival to product aging
            before shipment, is meticulously refined. Professional talent,
            advanced equipment, and scientific management ensure the high
            quality of Kaifeng Measurement and Control Company's products.
            Kaifeng Measurement and Control Technology Co., Ltd. will continue
            to provide customers with high-quality products and services, guided
            by the business philosophy of "customer-first, integrity foremost,
            technology leadership, and quality for success.
          </small>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default ProductListPage;
