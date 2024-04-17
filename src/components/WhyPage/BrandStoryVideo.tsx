import { Col, Container, Row } from "react-bootstrap";

const BrandStoryVideo = () => {
  return (
    <Container className="bg-white text-center py-5" fluid>
      <Row className="justify-content-center">
        <Col sm="8" md="6">
          <h2 className="fs-2 pb-3 text-dark-green">Why KFCK?</h2>
          <div className="ratio ratio-16x9">
            <iframe
              className="embed-responsive-item"
              src={`https://www.youtube.com/embed/mZtY3PG1XnE`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BrandStoryVideo;
