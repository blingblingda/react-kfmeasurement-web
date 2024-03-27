import { Col, Container } from "react-bootstrap";
import whyPageBanner from "../../assets/whyPageBanner.jpeg";
import { useNavigate } from "react-router-dom";

const WhyBanner = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <>
      <div
        className="px-5 py-5 text-center"
        style={{
          backgroundImage: `url(${whyPageBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        <Col className="py-1 px-4 list-unstyled d-flex justify-content-start">
          <li className="path-text" onClick={handleHomeClick}>
            Home
          </li>
          <li className="li-before text-gray">Why KFCK</li>
        </Col>
        <div className="col-lg-4">
          <p className="display-7 mt-5 fw-bold text-white text-start">
            KFCK specializes in the research，development and project design in
            the field of nuclear instrumentation and industrial on-site
            measurement and control system. The company has strong talent
            capabilities and great potential for future development.
          </p>
        </div>
      </div>
    </>
  );
};

export default WhyBanner;
