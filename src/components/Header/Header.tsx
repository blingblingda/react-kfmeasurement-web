import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import Button from "../Button/Button";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar expand="lg" className="bg-body-transparent navbar-underline">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Product1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Product2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Product3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Product4</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Cases" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Case1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Case2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Case3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Case4</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Download</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button onClick={() => console.log("clicked")}>Contac Us</Button>
        <Button onClick={() => console.log("clicked")}>Quote Here</Button>
      </Container>
    </Navbar>
  );
};

export default Header;
