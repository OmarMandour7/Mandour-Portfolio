import React from "react";
import { TypeAnimation } from "react-type-animation";

function Animation() {
  return (
  <TypeAnimation
  sequence={[
    "Front-End Developer (React + Next).",
    2500,
    "Building Scalable E-commerce & Platforms.",
    2500,
    "Clean Code, APIs, and Best Practices.",
    2500,
  ]}
  speed={30}
  repeat={Infinity}
/>
  );
}

export default Animation;
