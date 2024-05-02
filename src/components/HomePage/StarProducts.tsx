import { Container, Row, Col } from "react-bootstrap";
import StarCard from "../UI/Card/StarCard";
import Items from "../../data/itemList";

const StarProducts = () => {
  const starProducts = Items.slice(6, 10);

  return (
    <>
      <Container className="text-dark-green light-sec-space">
        <Row>
          <Col>
            <h2 className="text-center mb-5">Star Products</h2>
          </Col>
        </Row>
        <Row>
          {starProducts.map((product) => (
            <Col key={product.id} sm={6} lg={3}>
              <StarCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default StarProducts;
