import Card from "react-bootstrap/Card";
import { ProductFull } from "../../../models/product";
import WebButton from "../Button/WebButton";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: ProductFull;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleProductId = () => {
    navigate("/products/" + product.id);
  };

  return (
    <Card className="card-border-top-line card-min-height">
      <Card.Body className="d-flex flex-column justify-content-between align-items-center">
        <div className="text-center">
          <Card.Title className="fs-5 text-dark-green">
            {product.name}
          </Card.Title>
          <Card.Text className="text-grey px-2">
            {product.description}
          </Card.Text>
        </div>
        <Card.Img variant="bottom" src={product.imgSrc} />
        <WebButton btnStyle="dark" onClick={handleProductId}>
          Learn More
        </WebButton>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
