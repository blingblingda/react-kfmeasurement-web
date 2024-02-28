import {
  Award,
  Database,
  Key,
  People,
  ShieldCheck,
} from "react-bootstrap-icons";
import Reason from "../UI/Symbol/Reason";
import { Col, Container, Row } from "react-bootstrap";

const reasons = [
  {
    id: 1,
    icon: Award,
    text: "Patent Product Quality",
  },
  {
    id: 2,
    icon: Database,
    text: "Advanced Research Technologies",
  },
  {
    id: 3,
    icon: Key,
    text: "Superb Brand Advantage",
  },
  {
    id: 4,
    icon: People,
    text: "Deep Industry Collaboration",
  },
  {
    id: 5,
    icon: ShieldCheck,
    text: "Energy-efficient and High-performance",
  },
];

const Feature = () => {
  return (
    <>
      <Container
        fluid
        className="text-center text-dark-green text-bg-light-grey
        grey-sec-space"
      >
        <Row className="justify-content-md-center mb-5">
          <Col>
            <h2>5 reasons why professionals choose KFCK</h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center px-5">
          {reasons.map((reason) => (
            <Col key={reason.id}>
              <Reason reason={reason} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Feature;
