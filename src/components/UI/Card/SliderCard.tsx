import Card from "react-bootstrap/Card";
import { ProductFull } from "../../../models/product";

interface SliderCardProps {
  slide: ProductFull;
}

const SliderCard = ({ slide }: SliderCardProps) => {
  return (
    <Card className="boarder border-white" style={{ width: "22rem" }}>
      <a
        className="text-dark-green text-decoration-none"
        href="http://www.google.com"
        target="_blank"
        rel="noreferrer"
      >
        <Card.Img
          src={slide.imgSrc}
          style={{ width: "20rem", height: "15rem" }}
        />
        <Card.Body style={{ height: "4rem" }}>
          <Card.Text>{slide.name}</Card.Text>
        </Card.Body>
      </a>
    </Card>
  );
};

export default SliderCard;
