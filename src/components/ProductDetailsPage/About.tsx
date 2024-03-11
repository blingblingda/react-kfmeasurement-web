import React from "react";

interface AboutProps {
  productMD: string;
}

const About = ({ productMD }: AboutProps) => {
  return <div className="py-3">Component About</div>;
};

export default About;
