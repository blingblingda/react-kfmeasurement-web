import React from "react";
import Journey from "../../assets/Journey.jpg";
import { Stack } from "react-bootstrap";

const WhyJourney = () => {
  return (
    <>
      <Stack gap={5} className="py-5 text-center text-dark-green bg-white">
        <h2>26 Years of Research and Progress</h2>
        <img
          src={Journey}
          alt="why journey pic"
          className="w-50 position-relative start-50 translate-middle-x"
        />
      </Stack>
    </>
  );
};

export default WhyJourney;
