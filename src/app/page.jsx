"use client";
import { motion } from "framer-motion";
import Social from "@/components/Social";
import Animation from "@/components/Animation";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Homepage = () => {
  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 p-20">
        <div className="h-1/2 lg:h-full lg:w-5/12 flex justify-center items-center mb-24 md:mb-0">
          <div className="deneme"></div>
        </div>
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center  text-white">
          <h1 className="text-3xl md:text-6xl font-bold">
            Omar Mandour   <br />
            <span className="md:text-5xl">
              <Animation />
            </span>
          </h1>

          <p className="md:text-xl  font-bold">
           I’m a front-end developer specializing in React.js and Next.js, focused on building modern, responsive,       and high-performance web applications. I care about clean code, great user experience, and scalable design.

          </p>
          <div className="flex gap-4 bg-white p-8 rounded-full bg-opacity-40 text-white">
      
      <Link
        href="/portfolio"
        target="_blank"
        aria-label="Linktr Link"
        className="text-2xl md:text-3xl font-bold flex "
      >
       
       Portfolio   
        <FaArrowRight className="text-3xl hover:scale-[1.35] mx-2" />
      </Link>
    </div>
          <Social />
         
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
