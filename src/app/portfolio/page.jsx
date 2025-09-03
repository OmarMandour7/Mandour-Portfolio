"use client";
import AnimationFetured from "@/components/AnimationFetured";
import Card from "@/components/Card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PortfolioPage = () => {
  const containerRef = useRef();

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-y-auto overflow-x-hidden  lg:flex" ref={containerRef}>
        <div>
          <div className="w-screen my-6 flex items-center justify-center text-4xl text-center font-bold text-white">
    <AnimationFetured />
          </div>

          
          <div className=" flex justify-center items-center  ">
              <Card />
          </div>
            
      
      
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
