import React from "react";
import { TypeAnimation } from "react-type-animation";

function Animation() {
  return (
  <TypeAnimation
  sequence={[
   
     "APIs,",
    2500,
     "Best Practices",
    2500,
    "Clean Code",
    2500,
  ]}
  speed={30}
  repeat={Infinity}
/>
  );
}

export default Animation;
