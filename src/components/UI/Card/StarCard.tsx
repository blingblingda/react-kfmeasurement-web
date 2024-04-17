import Card from "react-bootstrap/Card";
import WebButton from "../Button/WebButton";
import { ProductFull } from "../../../models/product";
import { useNavigate } from "react-router-dom";

interface StarCardProps {
  product: ProductFull;
}

const StarCard = ({ product }: StarCardProps) => {
  const navigate = useNavigate();

  const handleProductsClick: () => void = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <Card
      border="white"
      text="dark-green"
      className="d-flex flex-column justify-content-between align-items-center star-card-height"
      style={{ height: "29rem" }}
    >
      <Card.Title className="text-center">{product.name}</Card.Title>
      <Card.Img
        src={product.imgSrc}
        className="mt-4"
        style={{ width: "20rem" }}
      />
      <Card.Body className="d-flex flex-column justify-content-between align-items-center text-center">
        <Card.Text>{product.description}</Card.Text>
        <WebButton btnStyle="dark" onClick={handleProductsClick}>
          Learn More
        </WebButton>
      </Card.Body>
    </Card>
  );
};

export default StarCard;
