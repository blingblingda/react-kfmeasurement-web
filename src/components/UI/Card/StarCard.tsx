import Card from "react-bootstrap/Card";
import WebButton from "../Button/WebButton";
import { ProductFull } from "../../../models/product";

interface StarCardProps {
  product: ProductFull;
}

const StarCard = ({ product }: StarCardProps) => {
  return (
    <Card
      border="white"
      text="dark-green"
      className="d-flex flex-column justify-content-between align-items-center star-card-height"
      style={{ height: "26rem" }}
    >
      <Card.Title>{product.name}</Card.Title>
      <Card.Img variant="top" src={product.imgSrc} className="mt-3" />
      <Card.Body className="d-flex flex-column justify-content-between align-items-center text-center">
        <Card.Text>{product.description}</Card.Text>
        <WebButton btnStyle="dark" onClick={() => console.log("clicked")}>
          Learn More
        </WebButton>
      </Card.Body>
    </Card>
  );
};

export default StarCard;
