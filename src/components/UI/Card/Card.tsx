import Card from "react-bootstrap/Card";
import Img1 from "../../../assets/Series1.png";

interface IHeaderProps {}

const ShowCase: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img variant="top" src={Img1} />
      <Card.Body>
        <Card.Text>New Energy Area Density Meter</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ShowCase;
