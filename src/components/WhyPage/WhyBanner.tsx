import { Col, Container } from "react-bootstrap";
import whyPageBanner from "../../assets/whyPageBanner.jpg";
import { useNavigate } from "react-router-dom";

const WhyBanner = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${whyPageBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        <Container>
          <Col className="p-4 list-unstyled d-flex justify-content-start">
            <li className="path-text" onClick={handleHomeClick}>
              Home
            </li>
            <li className="li-before text-gray">Why KFCK</li>
          </Col>
          <div className="col-lg-6 px-4">
            <p className="h5 lh-base mt-3 fw-bold text-white text-start">
              KFCK specializes in the research，development and project design
              in the field of nuclear instrumentation and industrial on-site
              measurement and control system.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default WhyBanner;
