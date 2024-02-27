import React from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";

const ProductsPage = () => {
  return (
    <>
      <Header />
      <main>
        <div>path</div>
        <Container>
          <Row
            className="justify-content-md-center"
            style={{ height: "2000px" }}
          >
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
        <div>Description</div>
      </main>

      <Footer />
    </>
  );
};

export default ProductsPage;
