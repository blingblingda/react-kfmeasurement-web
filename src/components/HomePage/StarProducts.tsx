import { Container, Row, Col } from "react-bootstrap";
import StarCard from "../UI/Card/StarCard";

const StarProducts = () => {
  return (
    <>
<Container className="mt-3 text-dark-green">
        <Row>
          <Col>
            <h2 className="text-center mb-5">Star Product</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <StarCard name="Star 1" description="This is a star product" />
          </Col>
          <Col>
            <StarCard name="Star 2" description="This is a star product" />
          </Col>
          <Col>
            <StarCard name="Star 3" description="This is a star product" />
          </Col>
          <Col>
            <StarCard name="Star 4" description="This is a star product" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default StarProducts;
