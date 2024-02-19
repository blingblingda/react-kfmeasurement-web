import Card from "react-bootstrap/Card";
import Img1 from "../../../assets/Series1.png";

interface IHeaderProps {}

const ShowCase: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Img1} />
      <Card.Body>
        <Card.Title>Wall Mounted Air Conditioning</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ShowCase;
