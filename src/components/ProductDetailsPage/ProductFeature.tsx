import { Award, BagHeart, ShieldCheck } from "react-bootstrap-icons";
import Feature from "../UI/Symble/Feature";
import { Col, Container, Row } from "react-bootstrap";

const features = [
  {
    id: 1,
    icon: Award,
    text: "Patent Product Quality",
  },

  {
    id: 2,
    icon: BagHeart,
    text: "Super Brand Advantage",
  },

  {
    id: 3,
    icon: ShieldCheck,
    text: "Rest-assured Warranty",
  },
];

const ProductFeature = () => {
  return (
    <>
      <Container fluid className="text-center text-dark-green bg-gray py-5">
        <Row className="justify-content-center mb-4">
          <Col>
            <h5>Why choose KFCK product</h5>
          </Col>
        </Row>
        <Row className="justify-content-center px-5">
          {features.map((feature) => (
            <Col key={feature.id}>
              <Feature feature={feature} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductFeature;
