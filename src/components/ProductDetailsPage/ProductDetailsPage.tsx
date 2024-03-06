import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row, Card, Tab, Tabs } from "react-bootstrap";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Items from "../UI/ItemList/itemList";
import WebButton from "../UI/Button/WebButton";
import "./ProductDetailsPage.scss";

const ProductDetailsPage = () => {
  let { productSlug } = useParams();
  const product = Items.filter((item) => item.slug === productSlug)[0];
  const navigate = useNavigate();

  const handleHomeClick: () => void = () => {
    navigate("/");
  };
  const handleProductsClick: () => void = () => {
    navigate("/products");
  };
  const handleContactClick: () => void = () => {
    navigate("/products");
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
            <li className=" li-before path-text" onClick={handleProductsClick}>
              Products
            </li>
            <li className="li-before text-dark-green">{product.name}</li>
          </Col>
        </Container>
        <Container className="py-5 mb-5">
          <Row>
            <Col xs={12} md={6} lg={6} className="px-5">
              <img src={product.imgSrc} alt="first product" className="w-100" />
            </Col>
            <Col className="text-dark-green px-5" md={6} lg={6}>
              <h2 className="fs-3">{product.name}</h2>
              <p className="my-3">{product.description}</p>
              <p className="mt-2 text-grey" style={{ fontSize: "13px" }}>
                Category
              </p>
              <Card>
                <Card.Body>
                  <Card.Text className="text-dark-green">
                    {product.category}
                  </Card.Text>
                </Card.Body>
              </Card>
              <p className="mt-3 text-grey" style={{ fontSize: "13px" }}>
                Warranty
              </p>
              <Card style={{ width: "90px" }}>
                <Card.Body>
                  <Card.Text className="text-dark-green">5 Years</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="bg-white ">
          <Container className="py-2 px-5 d-flex justify-content-between align-items-center text-dark-green">
            <div>We can help you install your system.</div>
            <Row>
              <Col className="d-flex justify-content-start align-items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    fill="#004a60"
                    fill-rule="nonzero"
                    points="12.250204 15.142857 12.250204 4 11.0563265 4 8 6.43551017 8.77999999 7.45428567 10.9130612 5.75102039 10.9130612 15.142857"
                    stroke="none"
                    stroke-width="1"
                  ></polygon>
                </svg>
                <div className="mx-3" style={{ fontSize: "11px" }}>
                  Find a trusted installer in your area
                </div>
              </Col>
              <Col className="d-flex justify-content-start align-items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8439761,15.385306 L13.8439761,14.1380393 L9.62245812,14.1380393 L12.5967094,10.1723709 C12.8365684,9.83656838 13.7640231,8.7811889 13.7640231,7.27807265 C13.7640231,5.42316325 12.4208128,4 10.3580256,4 C7.63962393,4 7,6.52651453 7,6.52651453 L8.15132308,6.95826069 C8.15132308,6.95826069 8.58306923,5.24726667 10.3580256,5.24726667 C11.7492077,5.24726667 12.4208128,6.20670257 12.4208128,7.27807265 C12.4208128,8.50934872 11.4134051,9.62869061 10.9976496,10.1723709 L7.06396239,15.385306 L13.8439761,15.385306 Z"
                    fill="#004a60"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                  ></path>
                </svg>
                <div className="mx-3" style={{ fontSize: "11px" }}>
                  Organise an installer to quote for the job
                </div>
              </Col>
              <Col className="d-flex justify-content-start align-items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.61359789,15.627755 C11.6693336,15.627755 13.2753771,14.3750411 13.2753771,12.3353658 C13.2753771,10.0387236 11.6211523,9.60509184 11.6211523,9.60509184 C11.6211523,9.60509184 13.0023497,8.99479531 13.0023497,7.16390571 C13.0023497,5.38119742 11.4926688,4 9.64571876,4 C7.1884722,4 6.38545044,6.20027961 6.38545044,6.20027961 L7.54180177,6.71421353 C7.54180177,6.71421353 8.03967526,5.25271394 9.64571876,5.25271394 C10.834191,5.25271394 11.6532731,6.16815874 11.6532731,7.16390571 C11.6532731,8.44874052 10.6254053,9.07509749 9.35663093,9.07509749 L9.0193618,9.07509749 L9.0193618,10.311751 L9.54935615,10.311751 C11.1553997,10.311751 11.9263005,11.0826519 11.9263005,12.3353658 C11.9263005,13.411415 11.0590371,14.3750411 9.61359789,14.3750411 C7.67028525,14.3750411 7.1884722,12.528091 7.1884722,12.528091 L6,13.0741458 C6,13.0741458 6.72271958,15.627755 9.61359789,15.627755 Z"
                    fill="#004a60"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                  ></path>
                </svg>
                <div className="mx-3" style={{ fontSize: "11px" }}>
                  Provide market-leading support
                </div>
              </Col>
            </Row>
            <div>
              <WebButton btnStyle="dark" onClick={handleContactClick}>
                Contact Us
              </WebButton>
            </div>
          </Container>
        </div>
        <div>
          <Container>
            <Tabs
              defaultActiveKey="search"
              id="fill-tab-example"
              className="mb-3 tab-background"
              fill
            >
              <Tab
                eventKey="search"
                title="Search"
                style={{ paddingTop: "5vh" }}
              >
                Search
              </Tab>

              <Tab eventKey="cart" title="Cart" style={{ paddingTop: "5vh" }}>
                Cart
              </Tab>
            </Tabs>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
