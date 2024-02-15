import { Icon9CircleFill } from "react-bootstrap-icons";

interface Props {
  iconName: string;
  text: string;
}

const Symbol = ({ iconName, text }: Props) => {
  return (
    <>
      <div className="symbleWithText ms-3 mt-5 text-dark-green">
        <Icon9CircleFill />
        <p>Description</p>
      </div>
    </>
  );
};

export default Symbol;
