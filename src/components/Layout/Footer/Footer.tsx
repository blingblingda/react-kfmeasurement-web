import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss";
import { ArrowUp } from "react-bootstrap-icons";
import MyButton from "../../UI/Button/WebButton";

const Footer = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact-us");
  };

  return (
    <footer className="footer text-white">
      <div className="footer-top pt-5">
        <Container>
          <Row>
            <Col md={3}>
              <h5>KFCK</h5>
            </Col>
            <Col md={3}>
              <h5>Products</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/Product1" className="link-white">
                    Surface Density Meter
                  </a>
                </li>
                <li>
                  <a href="/Product2" className="link-white">
                    Mining Instrumentation
                  </a>
                </li>
                <li>
                  <a href="/Product3" className="link-white">
                    Power Supply System
                  </a>
                </li>
                <li>
                  <a href="/Product4" className="link-white">
                    Intelligent Products
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Cases</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/Case1" className="link-white">
                    GuangWang Pty Ltd
                  </a>
                </li>
                <li>
                  <a href="/Case2" className="link-white">
                    Jizhong Energy
                  </a>
                </li>
                <li>
                  <a href="/Case3" className="link-white">
                    Huaibei Mining
                  </a>
                </li>
                <li>
                  <a href="/Case4" className="link-white">
                    Yan Energy Group
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <a
                href="#top"
                className="link-white clearfix mb-3 d-block"
                id="scroll-top"
              >
                <ArrowUp /> Back to Top{" "}
              </a>
              <MyButton btnStyle="light" onClick={handleContact}>
                Contact Us
              </MyButton>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom py-1">
        <Container className="footer-bottom-bg">
          <Row>
            <Col md={6} xs={6} className="pt-2">
              <p className="text-dark-green text-decoration-none">
                Terms & Conditions
              </p>
            </Col>

            <Col md={6} xs={6}>
              <div className="d-flex justify-content-end pt-2">
                <div className="px-1">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#004a60"
                  >
                    <path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"></path>
                    <circle cx="14.87" cy="5.26" r="1.09"></circle>
                    <path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"></path>
                  </svg>
                </div>
                <div className="px-1">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#004a60"
                  >
                    <path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path>
                  </svg>
                </div>
                <p className="px-1 text-dark-green">
                  &copy; KFCK {new Date().getFullYear()}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
