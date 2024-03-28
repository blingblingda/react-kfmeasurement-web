import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import contactUsImg from "./contactUsImg.png";

const ContactUs = () => {
  const navigate = useNavigate();
  const handleHomeClick: () => void = () => {
    navigate("/");
  };

  return (
    <>
      <Header />
      <Container className="p-0" fluid>
        <Row>
          <Col>
            <Row className="bg-light-grey">
              <Col className="py-4 list-unstyled d-flex justify-content-start">
                <li className="path-text" onClick={handleHomeClick}>
                  Home
                </li>
                <li className="li-before text-dark-green">Contact Us</li>
              </Col>
            </Row>
            <Row className="bg-light-green">
              <Col>
                <ListGroup as="ul">
                  <ListGroup.Item as="li" active>
                    Cras justo odio
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    Dapibus ac facilisis in
                  </ListGroup.Item>
                  <ListGroup.Item as="li" disabled>
                    Morbi leo risus
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    Porta ac consectetur ac
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Col>
          <Col>
            {" "}
            <Image src={contactUsImg} alt="contactusimg" fluid />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ContactUs;
