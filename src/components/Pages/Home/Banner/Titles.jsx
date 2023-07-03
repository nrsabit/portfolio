import React from "react";
import { TypeAnimation } from "react-type-animation";

const Titles = () => {
  return (
    <TypeAnimation
      sequence={[
        "Front-End Developer",
        2000,
        "MERN Stack Developer",
        2000,
        "Full Stack Developer",
        2000,
        "Bubble.io Developer",
        2000,
      ]}
      wrapper="span"
      speed={20}
    //   style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default Titles;
