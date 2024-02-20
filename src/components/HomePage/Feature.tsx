import { Award, Database, Key, People, ShieldCheck } from "react-bootstrap-icons";
import Symbol from "./Symbol";
import { Col, Container, Row } from "react-bootstrap";


const reasons = [{
  icon: Award,
  text: "This is first reason",
  size: 40
},
{
  icon: Database,
  text: "This is second reason",
  size: 40
},
{
  icon: Key,
  text: "This is third reason",
  size: 40
},
{
  icon: People,
  text: "This is forth reason",
  size: 40
},
{
  icon: ShieldCheck,
  text: "This is fifth reason",
  size: 40
},
];

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
          <Col>
            <h2>{title}</h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
        {reasons.map((reason, index) => (
          <Col key={index}>
            <Symbol text={reason.text} icon={reason.icon} size={reason.size}/>
           </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Feature;
