import Card from "react-bootstrap/Card";
import Product from "../../../models/product";
import "./HeaderCard.css";

interface HeaderCardProps {
  product: Product;
}

const HeaderCard = ({ product }: HeaderCardProps) => {
  return (
    <Card style={{ width: "12rem" }}>
      <Card.Img variant="top" src={product.imgSrc} />
      <Card.Body>
        <Card.Text className="series-name">{product.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HeaderCard;
