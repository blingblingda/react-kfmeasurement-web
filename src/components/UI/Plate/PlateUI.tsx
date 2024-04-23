import React from "react";
import { Col, Container, Row } from "react-bootstrap";

interface PlateProps {
  title: string;
  imgSrc: string;
  description: string;
}

const PlateUI = ({ title, imgSrc, description }: PlateProps) => {
  return (
    <>
      <Container className="grey-sec-space">
        <Row className="g-0">
          <Col lg={8}>
            <img src={imgSrc} className="w-100" />
          </Col>
          <Col className="bg-white" lg={4}>
            <div className="p-5">
              <div>
                <h3 className="display-6 text-dark-green mb-4">{title}</h3>
              </div>
              <div>
                <span className="col-md-7 fs-6 text-dark-green">
                  {description}
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PlateUI;
