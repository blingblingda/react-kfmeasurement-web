import React from "react";
import { Icon } from "react-bootstrap-icons";

interface Props {
  icon: Icon; 
  text: string;
  size: number;
}
const Symbol = ({icon, text, size}: Props) => {
  return (
    <>
      <div className="text-center ">
        {React.createElement(icon, {size})}
        <p className="mt-3">{text}</p>
      </div>
    </>
  );
};

export default Symbol;
