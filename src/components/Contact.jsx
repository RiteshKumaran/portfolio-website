import React from "react";
import { CONTACT } from "../data";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";

const Contact = () => {
  return (
    <div className="border-b flex flex-col justify-center border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center mx-auto my-8"
      >
        Get in touch
      </motion.h2>
      <div className="text-center tracking-tighter ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="p-5 flex items-center justify-center text-2xl gap-4 md:gap-7"
        >
          <a href="https://www.linkedin.com/in/riteshkumaran/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/RiteshKumaran">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/_ritzzzz._/">
            <FaInstagram />
          </a>
          <a href="https://x.com/i_riteshkumaran">
            <FaTwitter />
          </a>
        </motion.div>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a className="border-b" href="mailto:riteshkumaran.dev@gmail.com">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
