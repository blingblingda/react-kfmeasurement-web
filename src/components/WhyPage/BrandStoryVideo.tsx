import { Container } from "react-bootstrap";

const BrandStoryVideo = () => {
  return (
    <Container className="bg-white text-center py-5" fluid>
      <h2 className="fs-2 pb-3 text-dark-green">Why KFCK?</h2>
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
