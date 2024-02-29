import React from "react";
import { Container } from "react-bootstrap";
import BannerImg from "../../assets/whyUsBanner.jpg";
import WebButton from "../UI/Button/WebButton";

const WhyUs = () => {
  return (
    <div className="grey-sec-space bg-light-grey fluid">
      <Container
        className="mx-auto rounded-2"
        style={{
          backgroundImage: `url(${BannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        <div className="container-fluid py-5 px-5 d-flex flex-column align-items-start justify-content-center">
          <h1 className="display-6 fw-bold text-white">
            Measurement and Control
            <br />
            Instruments made for China
          </h1>
          <p className="col-md-7 fs-5 text-white">
            Using a series of utilities, you can create this jumbotron, just
            like the one in previous versions of Bootstrap. Check out the
            examples below for how you can remix and restyle it to your liking.
          </p>
          <WebButton btnStyle="light" onClick={() => console.log("clicked")}>
            Why us
          </WebButton>
        </div>
      </Container>
      <Container className="my-5 text-dark-green text-center">
        <h3 className="mb-4">Stocked and supported by Reece</h3>
        <p className="w-50 mx-auto mb-4">
          Kaden is available at Reece, Metalflex and Actrol branches. You'll
          have the support of Reece when buying, installing and servicing your
          Kaden.
        </p>
        <WebButton btnStyle="dark" onClick={() => console.log("clicked")}>
          Explore the range
        </WebButton>
      </Container>
    </div>
  );
};

export default WhyUs;
