import React from "react";
import HeroBgImg from "../../assets/herobg.png";
import LogoImg from "../../assets/kfckLogo.png";

const Hero = () => {
  return (
    <div
      className="px-4 py-5 text-center"
      style={{
        backgroundImage: `url(${HeroBgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "700px",
      }}
    >
      <img
        className="d-block mx-auto mb-4"
        src={LogoImg}
        alt=""
        width="72"
        height="57"
      />
      <h1 className="display-5 mt-5 fw-bold text-body-emphasis text-white">
        High-quality Mining Intelligent Products
      </h1>
    </div>
  );
};

export default Hero;
