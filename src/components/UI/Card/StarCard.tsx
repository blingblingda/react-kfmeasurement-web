import Card from "react-bootstrap/Card";
import WebButton from "../Button/WebButton";
import Product from "../../../models/product";

interface StarCardProps {
  product: Product;
}

const StarCard = ({ product }: StarCardProps) => {
  return (
    <Card border="light" text="dark-green" style={{width: '18rem', height: '24rem', marginBottom: '2rem'}}>
      <Card.Title>{product.name}</Card.Title>
      <Card.Img variant="top" src={product.imgSrc} />
      <Card.Body>
        <Card.Text>{product.description}</Card.Text>
        <WebButton btnStyle="dark" onClick={() => console.log("clicked")}>
          Learn More
        </WebButton>
      </Card.Body>
    </Card>
  );
};

export default StarCard;
