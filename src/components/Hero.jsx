import React, { useEffect, useState } from "react";
import { HERO_CONTENT } from "../data";
import riteshPic from "../assets/profile/ritesh-pic-enchance.jpeg";
import riteshPic1 from "../assets/profile/ritesh-pic.jpeg";

import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Lottie from "lottie-react";
import heroAnimation from "../lotties/hero-animation.json";

const container = (delay) => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <div className="border-b pb-4 lg:mb-36 border-neutral-900">
      <div className="flex justify-center items-center flex-wrap flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="flex mx-6 flex-col  lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-[200] tracking-tight lg:mt-16 lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
            >
              Ritesh Kumaran
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r  from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-start text-3xl tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 font-light tracking-tighter py-6 max-w-xl"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 1.5 }}
          className="relative mb-10 z-index-[5] w-[75%] h-[75%] sm:w-[50%] sm:h-[50%]  md:w-[45%] md:h-[45%] lg:w-[35%] lg:h-[35%]"
        >
          <Lottie animationData={heroAnimation} loop={true} play />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
