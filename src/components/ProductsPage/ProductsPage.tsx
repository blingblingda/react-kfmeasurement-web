import React from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
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
        <Container>
          <Row className="justify-content-center" style={{ height: "2000px" }}>
            <Col sm={3} className="bg-primary">
              <div
                className="sticky-sm-top bg-danger mt-5"
                style={{ height: "100px", top: "90px" }}
              >
                Filter
              </div>
            </Col>
            <Col sm={9} className="bg-secondary">
              Product list
            </Col>
          </Row>
        </Container>
        <Container>
          <div>Description</div>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default ProductsPage;
