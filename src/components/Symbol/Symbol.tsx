import { Icon0Circle, Icon1Circle } from "react-bootstrap-icons";

interface Props {
  children: string;
  title: string;
}

const Symbol = ({ children, title }: Props) => {
  return (
    <>
      <div className="symbleWithText ms-3 mt-5 text-dark-green">
        <h2>{title}</h2>
        <div>
          <Icon0Circle />
          <p>{children}</p>
        </div>
        <div>
          <Icon1Circle />
          <p>{children}</p>
        </div>
      </div>
    </>
  );
};

export default Symbol;
