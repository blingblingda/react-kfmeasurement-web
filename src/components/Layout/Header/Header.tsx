import React from "react";
import { Container, Navbar, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import WebButton from "../../UI/Button/WebButton";
import ShowCase from "../../UI/Card/Card";
import "./Header.css";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar id="top" expand="lg" className="bg-body-transparent navbar-underline">
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
              <NavDropdown.Item as="div" className="text-dark-green">
                <Container>
                  <ShowCase />
                </Container>
              </NavDropdown.Item>
              <NavDropdown.Item as="div" className="text-dark-green">
                <Container>
                  <ShowCase />
                </Container>
              </NavDropdown.Item>
              <NavDropdown.Item as="div" className="text-dark-green">
                <Container>
                  <ShowCase />
                </Container>
              </NavDropdown.Item>
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
        <WebButton style="dark" onClick={() => console.log("clicked")}>Contact Us</WebButton>
      </Container>
    </Navbar>
  );
};

export default Header;
