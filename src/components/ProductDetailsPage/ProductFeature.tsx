import { Award, BagHeart, ShieldCheck } from "react-bootstrap-icons";
import Reason from "../UI/Symbol/Feature";
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
    text: "Superb Brand Advantage",
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
      <Container
        fluid
        className="text-center text-dark-green bg-gray py-5"
      >
        <Row className="justify-content-md-center mb-4">
          <Col>
            <h5>Why choose KFCK prodcut</h5>
          </Col>
        </Row>
        <Row className="justify-content-md-center px-5">
          {features.map((feature) => (
            <Col key={feature.id}>
              <Reason feature={feature} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductFeature;
