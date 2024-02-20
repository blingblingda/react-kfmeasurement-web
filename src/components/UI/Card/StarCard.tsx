import Card from "react-bootstrap/Card";
import Img1 from "../../../assets/Series1.png";
import WebButton from "../Button/WebButton";


interface Props {
  name: string;
  description: string;
}

const StarCard= ({name, description}: Props) => {
  return (
    <Card border="light" text="dark-green">   
      <Card.Title>{name}</Card.Title>
      <Card.Img variant="top" src={Img1} />
      <Card.Body>
        <Card.Text >{description}</Card.Text>
        <WebButton style="dark" onClick={() => console.log("clicked")}>Learn More</WebButton>
      </Card.Body>
    </Card>
  );
};

export default StarCard;