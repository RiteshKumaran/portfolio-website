import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import ritesh_resume from "../assets/profile/Ritesh-Resume.pdf";

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 text-5xl items-center">
        <a href="#">Ritz</a>
      </div>
      <div className="m-8 flex items-center justify-center text-2xl gap-4 md:gap-7">
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
        <a href={ritesh_resume} download="Ritesh_Resume">
          <MdOutlineFileDownload />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
