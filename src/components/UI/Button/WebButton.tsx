import Button from "react-bootstrap/Button";

interface IButtonProps {
  children: string;
  style: "dark" | "light";
  onClick: () => void;
}

const WebButton = ({ children, style, onClick }: IButtonProps) => {
  return (
    <>
      <Button variant={style == "dark" ? "outline-dark-green" : "outline-white"} onClick={onClick}>
        {children}
      </Button>
    </>
  );
};

export default WebButton;
