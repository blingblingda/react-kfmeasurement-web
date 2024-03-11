import { Col, Container, Row, Stack } from "react-bootstrap";
import banner_1 from "../../assets/banner_1.png";

const ComponentAbout = () => {
  return (
    <>
      <Stack direction="vertical" gap={3}>
        <Container className="grey-sec-space bg-light-grey">
          <Row>
            <Col md={8}>
              <img src={banner_1} alt="First slide" className="img-fluid"/>
            </Col>
            <Col md={4}>
              <div className="bg-white p-5">
                <h1 className="display-6 fw-bold text-dark-green">
                  Measurement and Control
                </h1>
                <p className="col-md-7 fs-5 text-dark-green">
                  Using a series of utilities, you can create this jumbotron,
                  just like the one in previous versions of Bootstrap.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Stack direction="horizontal" className="grey-sec-space bg-light-grey">
          <div className="d-flex flex-column bg-white p-5">
            <h1 className="display-6 fw-bold text-dark-green">
              Measurement and Control
            </h1>
            <p className="col-md-7 fs-5 text-dark-green">
              Using a series of utilities, you can create this jumbotron, just
              like the one in previous versions of Bootstrap.
            </p>
          </div>
          <img src={banner_1} alt="First slide" />
        </Stack>
      </Stack>
    </>
  );
};
export default ComponentAbout;
