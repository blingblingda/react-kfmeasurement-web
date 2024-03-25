import { Lightbulb, Flag, Buildings } from "react-bootstrap-icons";
import { Col, Container, Row } from "react-bootstrap";
import Culture from "../UI/Symbol/Culture";

const cultures = [
  {
    id: 1,
    icon: Lightbulb,
    text: "Corporate Philosophy",
    description:
      "Customer First, Integrity Supreme, Technology Leadership, Quality Wins.",
  },
  {
    id: 2,
    icon: Flag,
    text: "Corporate Mission",
    description:
      "To facilitate customer growth, fulfill employees' dreams, and give back to society with gratitude.",
  },
  {
    id: 3,
    icon: Buildings,
    text: "Corporate Spirit",
    description:
      "With utmost sincerity, even metal and stone can be penetrated.",
  },
];

const CompanyCulture = () => {
  return (
    <>
      <Container
        fluid
        className="text-center text-dark-green text-bg-light-grey
        grey-sec-space"
      >
        <Row className="justify-content-md-center mb-5">
          <Col>
            <h2>Company Vision</h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          {cultures.map((culture) => (
            <Col key={culture.id}>
              <Culture culture={culture} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CompanyCulture;
