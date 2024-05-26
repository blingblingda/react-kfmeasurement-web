import Button from "react-bootstrap/Button";

interface IButtonProps {
  children: string;
  btnStyle: "dark" | "light";
  className?: string;
  onClick: (e?: any) => void;
}

const WebButton = ({
  children,
  btnStyle,
  className,
  onClick,
}: IButtonProps) => {
  return (
    <>
      <Button
        variant={btnStyle === "dark" ? "outline-dark-green" : "outline-white"}
        className={className}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  );
};

export default WebButton;
