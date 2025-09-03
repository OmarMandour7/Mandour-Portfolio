import React from 'react'
import { TypeAnimation } from "react-type-animation";

const AnimationFetured = () => {
  return (
   <TypeAnimation
  sequence={[
   
     "Featured Projects",
    2500,
    " ",
    500,
     "Featured Projects",
    2500,
  ]}
  speed={30}
  repeat={Infinity}
/>
  )
}

export default AnimationFetured