import Button from "react-bootstrap/Button";

interface IButtonProps {
  children: string;
  btnStyle: "dark" | "light";
  onClick: (e?: any) => void;
}

const WebButton = ({ children, btnStyle, onClick }: IButtonProps) => {
  return (
    <>
      <Button
        variant={btnStyle === "dark" ? "outline-dark-green" : "outline-white"}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  );
};

export default WebButton;
