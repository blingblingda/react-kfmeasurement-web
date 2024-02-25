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
    text: "This is first reason",
  },
  {
    id: 2,
    icon: Database,
    text: "This is second reason",
  },
  {
    id: 3,
    icon: Key,
    text: "This is third reason",
  },
  {
    id: 4,
    icon: People,
    text: "This is forth reason",
  },
  {
    id: 5,
    icon: ShieldCheck,
    text: "This is fifth reason",
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
        <Row className="justify-content-md-center">
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
