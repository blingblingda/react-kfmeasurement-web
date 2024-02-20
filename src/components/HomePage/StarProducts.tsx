import { Container, Row, Col } from "react-bootstrap";
import StarCard from "../UI/Card/StarCard";
import Star_1 from "../../assets/star_1.png";
import Star_2 from "../../assets/star_2.png"
import Star_3 from "../../assets/star_3.png"
import Star_4 from "../../assets/star_4.png"

const stars = [{
  name: "Star Proudt 1",
  description: "This is star product 1",
  img: Star_1,
},
{
  name: "Star Proudt 2",
  description: "This is star product 2",
  img: Star_2,
},
{
  name: "Star Proudt 3",
  description: "This is star product 3",
  img: Star_3,
},
{
  name: "Star Proudt 4",
  description: "This is star product 4",
  img: Star_4,
},
];

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
          {stars.map((item, index) => (
          <Col key={index}>
            <StarCard name={item.name} description={item.description} img={item.img}/>
           </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default StarProducts;
