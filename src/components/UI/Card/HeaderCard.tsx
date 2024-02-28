import Card from "react-bootstrap/Card";
import Product from "../../../models/product";
import { useNavigate } from "react-router-dom";

interface HeaderCardProps {
  product: Product;
}

const HeaderCard = ({ product }: HeaderCardProps) => {
  const navigate = useNavigate();

  const handleRedirectClick = () => {
    if (typeof product.path === "string") {
      navigate(product.path);
    } else {
      console.warn("Attempted to navigate without a valid path");
    }
  };

  return (
    <Card style={{ width: "12rem" }} onClick={handleRedirectClick}>
      <Card.Img variant="top" src={product.imgSrc} />
      <Card.Body>
        <Card.Text className="text-dark-green">{product.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HeaderCard;
