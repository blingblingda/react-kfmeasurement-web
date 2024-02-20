import Card from "react-bootstrap/Card";
import WebButton from "../Button/WebButton";

interface Props {
  name: string,
  description: string,
  img: string
}

const StarCard= ({name, description, img}: Props) => {
  return (
    <Card border="light" text="dark-green">   
      <Card.Title>{name}</Card.Title>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Text >{description}</Card.Text>
        <WebButton style="dark" onClick={() => console.log("clicked")}>Learn More</WebButton>
      </Card.Body>
    </Card>
  );
};

export default StarCard;