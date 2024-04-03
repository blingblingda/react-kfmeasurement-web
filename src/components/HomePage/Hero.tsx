import React from "react";
import { useNavigate } from "react-router-dom";
import HeroBgImg from "../../assets/herobg.jpg";
import WebButton from "../UI/Button/WebButton";

const Hero = () => {
  const navigate = useNavigate();

  const handleProductClick: () => void = () => {
    navigate("/products");
  };

  return (
    <div
      className="px-4 py-5 text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${HeroBgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "640px",
      }}
    >
      <h2 className="display-5 mt-5 fw-bold text-white">
        High-quality Mining Intelligent Products
      </h2>
      <div className="col-lg-6 mx-auto">
        <p className="lead my-5 fw-bold text-white ">
          Focusing on the research and development and manufacturing of nuclear
          instrumentation products, successively developed a series of nuclear
          instruments including nuclear belt scales, nuclear densitometers,
          level meters, as well as a series of mining switch intelligent
          protectors, and coal mine electric power protection monitoring
          systems.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <WebButton btnStyle="light" onClick={handleProductClick}>
            Explore the range
          </WebButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
