import React from "react";
import Header from "../Layout/Header/Header";
import Container from "react-bootstrap/esm/Container";
import Footer from "../Layout/Footer/Footer";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const WhyPage = () => {
  const navigate = useNavigate();
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
            <li className="li-before text-dark-green">Why KFCK</li>
          </Col>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default WhyPage;
