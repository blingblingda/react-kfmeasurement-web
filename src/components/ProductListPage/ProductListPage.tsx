import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
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

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
              <ProductFilter catSelect={handleCheckboxChange} />
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
            Engineered for Australia's extreme summers & winters. Heat or cool
            your whole home or a single room with our range of climate
            solutions. Smart choice cooling. Leading warranties. Easy
            installation. Leading health features. Made to last. Types: split
            system air conditioning, multi air conditioning, ducted air
            conditioning, cassette air conditioning, window air conditioning,
            gas ducted heating, evaporative cooling
          </small>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default ProductListPage;
