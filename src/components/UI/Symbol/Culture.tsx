import React from "react";
import Symbol from "../../../models/symbol";

interface CultureProps {
  culture: Symbol;
}
const Culture = ({ culture }: CultureProps) => {
  return (
    <>
      <div className="text-center ">
        {React.createElement(culture.icon, { size: "40px" })}
        <p className="mt-3">{culture.text}</p>
        <p>{culture.description}</p>
      </div>
    </>
  );
};

export default Culture;
