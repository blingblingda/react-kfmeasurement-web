import { Col, Container, Row } from "react-bootstrap";
import Strategy1 from "../../assets/Strategy1.jpeg";
import Strategy2 from "../../assets/Strategy2.jpg";

const Strategy = () => {
  return (
    <>
      <Container className="grey-sec-space bg-white">
        <Row>
          <Col lg={8} className="px-0 py-0">
            <img src={Strategy1} alt="About us pic" className="w-100" />
          </Col>
          <Col lg={4} className="p-4">
            <h3 className="display-6 text-dark-green mb-4">About Us</h3>
            <span className="col-md-7 fs-6 text-dark-green">
              Kaifeng Measurement and Control Technology Pty Ltd. was
              established in 1992. The company specializes in the research and
              development, production, and project design and construction of
              new products in the field of nuclear instruments and industrial
              site measurement and control, as well as automation systems. It is
              a national high-tech enterprise, a dual software-certified
              company, a national science and technology small and medium-sized
              enterprise, a provincial science and technology little giant
              enterprise, and hosts a provincial-level engineering and
              technology research center. The company possesses numerous patents
              and software copyrights, among other independent intellectual
              property rights.
            </span>
          </Col>
        </Row>
      </Container>
      <Container className="grey-sec-space bg-white">
        <Row>
          <Col lg={4} className="p-4">
            <h3 className="display-6 text-dark-green mb-4">Brand Advantage</h3>
            <span className="col-md-7 fs-6 text-dark-green">
              KFCK is a national high-tech enterprise, and the company has
              maintained a high level of customer satisfaction over 30 years.
              KFCK is also a provincial-level "Specialized, Fine, Special, and
              New" Small Giant Enterprise, a Henan Provincial Intellectual
              Property Advantage Enterprise, a recipient of the Provincial
              Patent Award, and houses the Henan Provincial Nuclear Detection
              Instrument Engineering Technology Research Center. Additionally,
              the company has been honored with titles such as a Model
              Enterprise for the Integration of Information Technology and
              Industrialization, Quality Award, and Above-Scale Enterprise among
              others.
            </span>
          </Col>
          <Col lg={8} className="px-0 py-0">
            <img src={Strategy2} alt="Strategy pic" className="w-100" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Strategy;
