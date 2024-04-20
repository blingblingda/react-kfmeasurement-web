import { Col, Container, Row } from "react-bootstrap";
import { AboutPictures } from "../UI/ItemList/productAboutList";

interface AboutMainSectionProps {
  aboutSrc: [number, number];
}

const AboutMainSection = ({ aboutSrc }: AboutMainSectionProps) => {
  return (
    <>
      <Container className="grey-sec-space bg-light-grey">
        <Row className="g-0">
          <Col lg={8}>
            <img
              src={AboutPictures[aboutSrc[0]].pic}
              alt="First About pic"
              className="w-100"
            />
          </Col>
          <Col className="bg-white" lg={4}>
            <div className="p-5">
              <div>
                <h3 className="display-6 text-dark-green mb-4">
                  {AboutPictures[aboutSrc[0]].title}
                </h3>
              </div>
              <div>
                <span className="col-md-7 fs-6 text-dark-green">
                  {AboutPictures[aboutSrc[0]].description}
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="grey-sec-space bg-light-grey">
        <Row className="g-0">
          <Col className="bg-white" lg={4}>
            <div className="p-5">
              <div>
                <h3 className="display-6 text-dark-green mb-4">
                  {AboutPictures[aboutSrc[1]].title}
                </h3>
              </div>
              <div>
                <span className="col-md-7 fs-6 text-dark-green">
                  {AboutPictures[aboutSrc[1]].description}
                </span>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <img
              src={AboutPictures[aboutSrc[1]].pic}
              alt="Second About pic"
              className="w-100"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutMainSection;
