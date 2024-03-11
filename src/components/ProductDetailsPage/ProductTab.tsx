import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ComponentAbout from "./About";
import ComponentDetails from "./Details";

const enum Content {
  ABOUT = "About",
  DETAILS = "Details",
}

const ProductTab = () => {
  const [currentContent, setCurrentContent] = useState(Content.ABOUT);
  const handleContentSwitch = (contentType: Content) => {
    setCurrentContent(contentType);
  };

  return (
    <>
      <Container fluid className="bg-gray pt-4 px-5">
        <Row className="d-flex justify-content-center text-center">
          <Col sm={6} md={6} lg={6} className={currentContent == Content.ABOUT ? "active tab-nav d-block py-2" : "tab-nav d-block py-2"} onClick={() => handleContentSwitch(Content.ABOUT)}>
           About
          </Col>
          <Col sm={6} md={6} lg={6} className={currentContent == Content.DETAILS ? "active tab-nav d-block py-2" : "tab-nav d-block py-2"} onClick={() => handleContentSwitch(Content.DETAILS)}>
           Detail
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        style={{ height: "1400px" }}
        className="bg-light-grey px-5"
      >
        {currentContent === Content.ABOUT ? (
          <ComponentAbout />
        ) : (
          <ComponentDetails />
        )}
      </Container>
    </>
  );
};

export default ProductTab;
