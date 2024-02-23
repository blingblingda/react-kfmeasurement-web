import Card from "react-bootstrap/Card";
import Product from "../../../models/product";

interface SliderCardProps {
  slide: Product;
}

const SliderCard = ({ slide }: SliderCardProps) => {
  return (
    <Card className="boarder border-white">
      <Card.Img src={slide.imgSrc} />
      <Card.Body>
        <a
          className="text-dark-green text-decoration-none"
          href="http://www.google.com"
          target="_blank"
          rel="noreferrer"
        >
          <Card.Text>{slide.description}</Card.Text>
        </a>
      </Card.Body>
    </Card>
  );
};

export default SliderCard;
