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

  const handleWhyUs: () => void = () => {
    navigate("/why-us");
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle">
          <svg
            width="22"
            height="22"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <rect x="1" y="3" width="18" height="1"></rect>
            <rect x="1" y="7" width="18" height="1"></rect>
            <rect x="1" y="11" width="18" height="1"></rect>
            <rect x="1" y="15" width="18" height="1"></rect>
          </svg>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavDropdown
              title="Products"
              id="basic-nav-dropdown"
              className="nav-dropdown-title custom-nav-dropdown"
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
              className="nav-dropdown-title custom-nav-dropdown"
            >
              {cases.map((product) => (
                <NavDropdown.Item key={product.id}>
                  <HeaderCard product={product} />
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link
              onClick={handleWhyUs}
              className="text-dark-green link-style"
            >
              Why KFCK
            </Nav.Link>
          </Nav>
          <WebButton
            className={"contactBtn"}
            btnStyle="dark"
            onClick={handleContact}
          >
            Contact Us
          </WebButton>
          <a className="contactLink" onClick={handleContact}>
            Contact Us
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
