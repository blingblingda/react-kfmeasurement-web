import { Col, Container, Row } from "react-bootstrap";

interface PlateProps {
  title: string;
  imgSrc: string;
  description: string;
  isReverse: boolean;
}

const PlateUI = ({ title, imgSrc, description, isReverse }: PlateProps) => {
  return (
    <Container className="grey-sec-space">
      <Row className="g-0">
        {isReverse ? (
          <>
            <Col lg={8}>
              <img
                src={imgSrc}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
                alt="card"
              />
            </Col>
            <Col className="bg-white text-dark-green" lg={4}>
              <div className="p-5">
                <div>
                  <h3 className="display-6  mb-4">{title}</h3>
                </div>
                <div>
                  <span className="col-md-7 fs-6">{description}</span>
                </div>
              </div>
            </Col>
          </>
        ) : (
          <>
            <Col className="bg-white text-dark-green" lg={4}>
              <div className="p-5">
                <div>
                  <h3 className="display-6  mb-4">{title}</h3>
                </div>
                <div>
                  <span className="col-md-7 fs-6">{description}</span>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <img
                src={imgSrc}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
                alt="card"
              />
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default PlateUI;
