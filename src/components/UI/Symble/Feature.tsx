import React from "react";
import Symbol from "../../../models/symbol";

interface FeatureProps {
  feature: Symbol;
}
const Feature = ({ feature }: FeatureProps) => {
  return (
    <>
      <div className="text-center fw-bold">
        {React.createElement(feature.icon, { size: "40px" })}
        <p className="mt-3">{feature.text}</p>
        <p className="fw-normal">{feature.description}</p>
      </div>
    </>
  );
};

export default Feature;
