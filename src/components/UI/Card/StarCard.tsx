import Card from "react-bootstrap/Card";
import WebButton from "../Button/WebButton";
import Product from "../../../models/product";

interface StarCardProps {
  product: Product;
}

const StarCard = ({ product }: StarCardProps) => {
  return (
    <Card
      border="light"
      text="dark-green"
      className="d-flex flex-column justify-content-between align-items-center star-card-height"
    >
      <Card.Title>{product.name}</Card.Title>
      <Card.Img variant="top" src={product.imgSrc} />
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
