import React from "react";
import Symbol from "../../../models/symbol";
// import { Icon } from "react-bootstrap-icons";

interface ReasonProps {
  reason: Symbol;
}
const Reason = ({ reason }: ReasonProps) => {
  return (
    <>
      <div className="text-center ">
        {React.createElement(reason.icon, { size: "40px" })}
        <p className="mt-3">{reason.text}</p>
      </div>
    </>
  );
};

export default Reason;
