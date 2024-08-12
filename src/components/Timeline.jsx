import React from "react";
import { EXPERIENCES } from "../data";
import { motion } from "framer-motion";
import { MdOutlineFileDownload } from "react-icons/md";
import ritesh_resume from "../assets/profile/Ritesh-Resume.pdf";

const Timeline = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 flex flex-col justify-center">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center mx-auto my-20"
      >
        Experience and Education
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center ">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400 ">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 text-sm mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-500"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      <button className="flex justify-center items-center mx-auto  gap-2 border-neutral-500  rounded-md">
        <div className="mx-auto flex items-center justify-center rounded-md">
          <div className=" w-full rounded-md bg-gradient-to-r from-purple-500 to-cyan-500 p-[1px]">
            <div className="flex py-2 px-2 h-full w-full items-center justify-center bg-gray-800 rounded-md">
              <a href={ritesh_resume} download={ritesh_resume}>
                Download Resume
              </a>

              <MdOutlineFileDownload />
            </div>
          </div>
        </div>
      </button>

      {/*  */}
    </div>
  );
};

export default Timeline;
