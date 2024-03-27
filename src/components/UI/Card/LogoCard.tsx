import Card from "react-bootstrap/Card";

interface LogoCardProps {
  logoSrc: string;
}

const LogoCard = ({ logoSrc }: any) => {
  return (
    <Card
      className="boarder border-light-grey justify-content-center px-5"
      style={{ width: "15rem", height: "7rem" }}
    >
      <Card.Img src={logoSrc} style={{ objectFit: "contain", maxHeight: "100%", maxWidth: "100%" }}/>
    </Card>
  );
};

export default LogoCard;
