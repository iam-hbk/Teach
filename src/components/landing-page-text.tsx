"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const LandingPageText = () => {
  return (
    
      <TypeAnimation
        className="text-4xl font-bold text-primary-content"
        style={{ whiteSpace: "pre-line" }}
        sequence={[
          1000,
          "Lecturer",
          1000,
          "Senior lecturer",
          1000,
          "Associate Professor",
          1000,
          "Professor",
        ]}
        // speed={70}
        repeat={Infinity}
      />
  );
};

export default LandingPageText;
