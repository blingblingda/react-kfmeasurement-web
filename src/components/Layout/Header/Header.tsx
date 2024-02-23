import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import WebButton from "../../UI/Button/WebButton";
import HeaderCard from "../../UI/Card/HeaderCard";
import Product from "../../../models/product";
import "./Header.scss";
import productSeriesImg1 from "../../../assets/productSeries1.png";
import productSeriesImg2 from "../../../assets/productSeries2.png";
import productSeriesImg3 from "../../../assets/productSeries3.png";
import productSeriesImg4 from "../../../assets/productSeries4.png";
import caseImg1 from "../../../assets/case1.png";
import caseImg2 from "../../../assets/case2.png";
import caseImg3 from "../../../assets/case3.png";
import caseImg4 from "../../../assets/case4.png";

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

const cases: Product[] = [
  {
    id: 1,
    imgSrc: caseImg1,
    description: "GuangWang pty ltd",
  },
  {
    id: 2,
    imgSrc: caseImg2,
    description: "Jizhong Energy",
  },
  {
    id: 3,
    imgSrc: caseImg3,
    description: "Huaibei Mining",
  },
  {
    id: 4,
    imgSrc: caseImg4,
    description: "Yan Energy Group",
  },
];

const Header = (props: HeaderProps) => {
  return (
    <Navbar id="top" expand="lg" className="bg-body-transparent custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="text-dark-green logo-style">
          KFCK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavDropdown
              title="Products"
              id="basic-nav-dropdown"
              className="mx-5 nav-dropdown-title custom-nav-dropdown"
            >
              {products.map((product) => (
                <NavDropdown.Item key={product.id}>
                  <HeaderCard product={product} />
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown
              title="Cases"
              id="basic-nav-dropdown"
              className="mx-5 nav-dropdown-title custom-nav-dropdown"
            >
              {cases.map((product) => (
                <NavDropdown.Item key={product.id}>
                  <HeaderCard product={product} />
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link href="#link" className="text-dark-green link-style mx-5">
              Why KFCK
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <WebButton btnStyle="dark" onClick={() => console.log("clicked")}>
          Contact Us
        </WebButton>
      </Container>
    </Navbar>
  );
};

export default Header;
