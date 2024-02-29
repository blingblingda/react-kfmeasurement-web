import React from "react";
import HeroBgImg from "../../assets/herobg.jpg";
import WebButton from "../UI/Button/WebButton";

const Hero = () => {
  return (
    <div
      className="px-4 py-5 text-center"
      style={{
        backgroundImage: `url(${HeroBgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "640px",
      }}
    >
      <h1 className="display-5 mt-5 fw-bold text-white">
        High-quality Mining Intelligent Products
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead my-5 fw-bold text-white ">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <WebButton btnStyle="dark" onClick={() => console.log("clicked")}>
            Explore the range
          </WebButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
