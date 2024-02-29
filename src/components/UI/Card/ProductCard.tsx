import Card from "react-bootstrap/Card";
import Product from "../../../models/product";
import WebButton from "../Button/WebButton";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
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
        <WebButton btnStyle="dark" onClick={() => console.log("clicked")}>
          Learn More
        </WebButton>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
