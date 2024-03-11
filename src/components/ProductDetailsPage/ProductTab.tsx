import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import About from "./About";
import Details from "./Details";

const enum Content {
  ABOUT = "About",
  DETAILS = "Details",
}

interface ProductTabProps {
  productMD: string;
}

const ProductTab = ({ productMD }: ProductTabProps) => {
  const [currentContent, setCurrentContent] = useState(Content.ABOUT);
  const handleContentSwitch = (contentType: Content) => {
    setCurrentContent(contentType);
  };

  return (
    <>
      <Container fluid className="bg-gray pt-4 px-5">
        <Row className="d-flex justify-content-center text-center">
          <Col
            sm={6}
            md={6}
            lg={6}
            className={
              currentContent === Content.ABOUT
                ? "active tab-nav d-block py-2"
                : "tab-nav d-block py-2"
            }
            onClick={() => handleContentSwitch(Content.ABOUT)}
          >
            About
          </Col>
          <Col
            sm={6}
            md={6}
            lg={6}
            className={
              currentContent === Content.DETAILS
                ? "active tab-nav d-block py-2"
                : "tab-nav d-block py-2"
            }
            onClick={() => handleContentSwitch(Content.DETAILS)}
          >
            Detail
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        style={{ height: "500px" }}
        className="bg-light-grey px-5"
      >
        {currentContent === Content.ABOUT ? (
          <About productMD={productMD} />
        ) : (
          <Details productMD={productMD} />
        )}
      </Container>
    </>
  );
};

export default ProductTab;
