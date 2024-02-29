import Card from "react-bootstrap/Card";
import Product from "../../../models/product";
import WebButton from "../Button/WebButton";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="border-top-line card-min-height">
      <Card.Body className="d-flex flex-column justify-content-between align-items-center">
        <div className="text-center">
          <Card.Title style={{ fontSize: '20px', fontWeight: 'bold', color: 'darkgreen'}}>{product.name}</Card.Title>
          <Card.Text style={{ fontSize: '12px',  color: 'grey' }}>{product.description}</Card.Text>
        </div>

        <div>
          <Card.Img variant="bottom" src={product.imgSrc} />
        </div>
        <div>
          <WebButton btnStyle="dark" onClick={() => console.log("clicked")}>
            Learn More
          </WebButton>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
