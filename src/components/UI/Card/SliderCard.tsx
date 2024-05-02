import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { ProductFull } from "../../../models/product";

interface SliderCardProps {
  slide: ProductFull;
}

const SliderCard = ({ slide }: SliderCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${slide.id}`);
  };

  return (
    <Card
      className="boarder border-white text-dark-green"
      style={{ width: "22rem", cursor: "pointer" }}
      onClick={handleClick}
    >
      <Card.Img
        src={slide.imgSrc}
        style={{ width: "20rem", height: "15rem" }}
      />
      <Card.Body style={{ height: "4rem" }}>
        <Card.Text>{slide.name}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SliderCard;
