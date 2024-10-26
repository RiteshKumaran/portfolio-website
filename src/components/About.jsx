import React from "react";
import aboutPic from "../assets/about-pic.jpg";
import { ABOUT_TEXT } from "../data";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b flex flex-col justify-center border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center mx-auto my-20 md:mb-20"
      >
        About Me
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center  justify-center">
            <img
              className="rounded-lg h-[300px] lg:h-[400px] border-black border"
              src={aboutPic}
              alt="Ritesh"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 py-6 max-w-xl">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
