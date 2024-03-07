import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
const ProductTab = () => {
  const enum Content {
    ABOUT = "About",
    DETAILS = "Details",
  }
  const [currentContent, setCurrentContent] = useState(Content.ABOUT);
  const handleContentSwitch = (contentType: Content) => (event: any) => {
    setCurrentContent(contentType);
    console.log(currentContent);
  };

  return (
    <>
      <Container fluid className="bg-gray pt-4 px-5">
          <Row className="d-flex justify-content-center text-center">
            <Col
              sm={6}
              md={6}
              lg={6}
              className="bg-info py-2"              
            >
              <span onClick={handleContentSwitch(Content.ABOUT)}>About</span>
            </Col>
            <Col
              sm={6}
              md={6}
              lg={6}
              className="bg-red py-2"              
            >
              <span onClick={handleContentSwitch(Content.DETAILS)}>Detail</span>
            </Col>
          </Row>
        </Container>
        <Container
          fluid
          style={{ height: "500px" }}
          className="bg-light-grey px-5"
        >
          {currentContent === Content.ABOUT ? (
            <div>about</div>
          ) : (
            <div>details</div>
          )}
        </Container>
    </>
  )
};

export default ProductTab;
