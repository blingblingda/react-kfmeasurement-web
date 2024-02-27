import { Container, Row, Col } from "react-bootstrap";
import StarCard from "../UI/Card/StarCard";
import Star_1 from "../../assets/star_1.png";
import Star_2 from "../../assets/star_2.png";
import Star_3 from "../../assets/star_3.png";
import Star_4 from "../../assets/star_4.png";

const products = [
  {
    id: 1,
    name: "Star Proudt 1",
    description: "Passive Ash Content Analyzer Series",
    imgSrc: Star_1,
  },
  {
    id: 2,
    name: "Star Proudt 2",
    description: "X/β-ray Surface Density Measurement Instrument Series",
    imgSrc: Star_2,
  },
  {
    id: 3,
    name: "Star Proudt 3",
    description: "Explosion-proof/General Electronic Belt Scale Series",
    imgSrc: Star_3,
  },
  {
    id: 4,
    name: "Star Proudt 4",
    description: "KJ357 Mining Power Monitoring System",
    imgSrc: Star_4,
  },
];

const StarProducts = () => {
  return (
    <>
      <Container className="text-dark-green light-sec-space">
        <Row>
          <Col>
            <h2 className="text-center mb-5">Star Products</h2>
          </Col>
        </Row>
        <Row>
          {products.map((product) => (
            <Col key={product.id}>
              <StarCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default StarProducts;
