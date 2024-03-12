import { Col, Container, Row, Stack } from "react-bootstrap";
import About_1_pic1 from "../../assets/About_1_pic1.jpeg";
import About_1_pic2 from "../../assets/About_1_pic2.jpeg";

const ComponentAbout = () => {
  return (
    <>
      <Stack direction="vertical" gap={3}>
        <Container className="grey-sec-space bg-light-grey">
          <Row className="g-0">
            <Col lg={8}>
              <img src={About_1_pic1} alt="First About pic" className="w-100" />
            </Col>
            <Col className="bg-white" lg={4}>
              <div className="p-5">
                <div>
                  <h3 className="display-6 text-dark-green mb-4">
                    Measurement and Control
                  </h3>
                </div>
                <div>
                  <span className="col-md-7 fs-6 text-dark-green">
                    Using a series of utilities, you can create this jumbotron,
                    just like the one in previous versions of Bootstrap.Using a
                    series of utilities, you can create this jumbotron.
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
                    Accurucy and Reliability
                  </h3>
                </div>
                <div>
                  <span className="col-md-7 fs-6 text-dark-green">
                    Using a series of utilities, you can create this jumbotron,
                    just like the one in previous versions of Bootstrap.Using a
                    series of utilities, you can create this jumbotron.
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <img
                src={About_1_pic2}
                alt="Second About pic"
                className="w-100"
              />
            </Col>
          </Row>
        </Container>
      </Stack>
    </>
  );
};
export default ComponentAbout;
