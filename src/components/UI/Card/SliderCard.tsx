import Card from "react-bootstrap/Card";
import Product from "../../../models/product";
import "./SliderCard.css";

interface SliderCardProps {
  slide: Product;
}

const SliderCard = ({ slide }: SliderCardProps) => {
  return (
    <Card border="light" text="dark-green">
      <Card.Img src={slide.imgSrc} />
      <Card.Body>
        <a
          className="link text-dark-green"
          href="http://www.google.com"
          target="_blank"
        >
          <Card.Text>{slide.description}</Card.Text>
        </a>
      </Card.Body>
    </Card>
  );
};

export default SliderCard;
