import { Icon0Circle, Icon1Circle, Icon2Circle } from "react-bootstrap-icons";
import Symbol from "../Symbol/Symbol";
import { Col, Container, Row } from "react-bootstrap";

interface Props {
  title: string;
}

const Feature = ({ title }: Props) => {
  return (
    <>
      <Container
        fluid
        className="symbleWithText text-center mt-5 pt-5 pb-5 text-dark-green text-bg-light-grey"
      >
        <Row className="justify-content-md-center mb-5">
          <Col md={3}>
            <h2>{title}</h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={3}>
            <Symbol text="this is my first symbol">
              <Icon0Circle className="m-3" />
            </Symbol>
          </Col>
          <Col md={3}>
            <Symbol text="this is my second symbol">
              <Icon1Circle className="m-3" />
            </Symbol>
          </Col>
          <Col md={3}>
            <Symbol text="this is my third symbol">
              <Icon2Circle className="m-3" />
            </Symbol>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Feature;
