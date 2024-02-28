import React from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import ProductList from "./ProductList";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductListPage = () => {
  const navigate = useNavigate();

  const handleHomeClick: () => void = () => {
    navigate("/");
  };

  return (
    <>
      <Header />
      <main className="bg-light-grey">
        <Container className="px-0">
          <ol className="py-4 list-unstyled d-flex justify-content-start">
            <li className="path-text" onClick={handleHomeClick}>
              Home
            </li>
            <li className="li-before text-dark-green">Products</li>
          </ol>
        </Container>
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col sm={3} className="bg-primary">
              <div
                className="sticky-sm-top bg-danger mt-5"
                style={{ height: "100px", top: "90px" }}
              >
                Filter
              </div>
            </Col>
            <Col sm={9}>
              <ProductList />
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
