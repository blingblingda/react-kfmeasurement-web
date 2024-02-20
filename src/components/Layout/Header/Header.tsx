import React from "react";
import { Container, Navbar, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import WebButton from "../../UI/Button/WebButton";
import HeaderCard from "../../UI/Card/HeaderCard";
import "./Header.css";
import Product from "../../../models/product";
import productSeriesImg1 from "../../../assets/productSeries1.png";
import productSeriesImg2 from "../../../assets/productSeries2.png";
import productSeriesImg3 from "../../../assets/productSeries3.png";
import productSeriesImg4 from "../../../assets/productSeries4.png";

interface HeaderProps {}

const products: Product[] = [
  {
    id: 1,
    imgSrc: productSeriesImg1,
    description: "Surface density meter",
  },
  {
    id: 2,
    imgSrc: productSeriesImg2,
    description: "Mining instrumentation",
  },
  {
    id: 3,
    imgSrc: productSeriesImg3,
    description: "Power Supply System",
  },
  {
    id: 4,
    imgSrc: productSeriesImg4,
    description: "Intelligent Products",
  },
];

const Header = (props: HeaderProps) => {
  return (
    <Navbar
      id="top"
      expand="lg"
      className="bg-body-transparent navbar-underline"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand href="#home" className="text-dark-green logo-style">
            KFCK
          </Navbar.Brand>
          <Nav className="mx-auto">
            <NavDropdown
              title="Products"
              id="basic-nav-dropdown"
              className="mx-3 nav-dropdown-title"
            >
              {products.map((product) => (
                <NavDropdown.Item className="text-dark-green">
                  <HeaderCard product={product} />
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown
              title="Cases"
              id="basic-nav-dropdown"
              className="mx-3 nav-dropdown-title"
            >
              <NavDropdown.Item href="#action/3.1" className="text-dark-green">
                Case1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="text-dark-green">
                Case2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="text-dark-green">
                Case3
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="text-dark-green link-style mx-3">
              Why KFCK
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <WebButton style="dark" onClick={() => console.log("clicked")}>
          Contact Us
        </WebButton>
      </Container>
    </Navbar>
  );
};

export default Header;
