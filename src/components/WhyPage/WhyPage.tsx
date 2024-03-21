import React from "react";
import Header from "../Layout/Header/Header";
import Container from "react-bootstrap/esm/Container";
import Footer from "../Layout/Footer/Footer";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import WhyBanner from "./WhyBanner";

const WhyPage = () => {
  return (
    <>
      <Header />
      <main className="bg-light-grey">
        <WhyBanner />
      </main>
      <Footer />
    </>
  );
};

export default WhyPage;
