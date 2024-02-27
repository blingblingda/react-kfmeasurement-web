import Card from "react-bootstrap/Card";
import Product from "../../../models/product";

interface SliderCardProps {
  slide: Product;
}

const SliderCard = ({ slide }: SliderCardProps) => {
  return (
    <Card className="boarder border-white" style={{width: '22rem'}}>
      <a
        className="text-dark-green text-decoration-none"
        href="http://www.google.com"
        target="_blank"
        rel="noreferrer"
      >
        <Card.Img src={slide.imgSrc} />
        <Card.Body>
          <Card.Text>{slide.description}</Card.Text>
        </Card.Body>
      </a>
    </Card>
  );
};

export default SliderCard;
