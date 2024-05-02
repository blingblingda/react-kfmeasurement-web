import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import WebButton from "../../UI/Button/WebButton";
import HeaderCard from "../../UI/Card/HeaderCard";
import HeaderProductsList from "../../../data/headerProductList";
import casesList from "../../../data/caseList";
import { HeaderProduct } from "../../../models/product";
import "./Header.scss";

const Header = () => {
  const products: HeaderProduct[] = HeaderProductsList;
  const cases: HeaderProduct[] = casesList;

  const navigate = useNavigate();

  const handleHomeClick: () => void = () => {
    navigate("/");
  };

  const handleContact: () => void = () => {
    navigate("/contact-us");
  };

  return (
    <Navbar id="top" expand="lg" className="bg-white custom-navbar">
      <Container>
        <Navbar.Brand
          className="text-dark-green logo-style pointer"
          onClick={handleHomeClick}
        >
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
            <Nav.Link
              href="/why-us"
              className="text-dark-green link-style mx-5"
            >
              Why KFCK
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <WebButton btnStyle="dark" onClick={handleContact}>
          Contact Us
        </WebButton>
      </Container>
    </Navbar>
  );
};

export default Header;
