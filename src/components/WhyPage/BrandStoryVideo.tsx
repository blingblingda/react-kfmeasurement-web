import { Container } from "react-bootstrap";

const BrandStoryVideo = () => {
  return (
    <Container className="bg-white text-center py-5" fluid>
      <h1 className="fs-3 pb-3 text-dark-green">Why KFCK?</h1>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/mZtY3PG1XnE`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </Container>
  );
};

export default BrandStoryVideo;
