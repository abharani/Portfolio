import { FaLinkedinIn, FaEnvelope, FaGithub } from "react-icons/fa";
import {
  AiOutlineFile,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { RiBookReadLine } from "react-icons/ri";
import { BiServer } from "react-icons/bi";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { Link, } from "react-router-dom";
import Footer from  "./Footer"

const Navbar = () => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="text-white space-y-8 px-4"
    >
      {/* Profile */}
      <>
        <div className="flex flex-col gap-0 sm:gap-1 items-center">
          <div className="bg-[#2C2F3F] lg:w-24 w-10 h-10 md:w-16 md:h-16  lg:h-24 xl:w-32 xl:h-32 p-1 rounded-full">
            <img
              className="w-full h-full  rounded-full"
              src="./images/profile1.jpg"
              alt="profile-img"
            />
          </div>
          <p className="lg:text-2xl xl:pt-2 sm:text-base font-semibold ">Abha Rani</p>

          {/* Social Links */}
          <div className="flex gap-1 md:gap-5  xl:gap-4 xl:pt-4">
            <div className="lg:p-[10px] lg:bg-[#2C2F3F] lg:rounded-full">
              <a href="https://mail.google.com/mail?hl=en" target="_blank">
                <FaEnvelope size={25} href="" />
              </a>
            </div>
            <div className="lg:p-[10px] lg:bg-[#2C2F3F] lg:rounded-full">
              <a
                href="https://www.linkedin.com/in/abha-rani-497196283"
                target="_blank"
              >
                <FaLinkedinIn size={25} />
              </a>
            </div>
            <div className="lg:p-[10px] lg:bg-[#2C2F3F] lg:rounded-full">
              <a href="https://github.com/abharani" target="_blank">
                <FaGithub size={25} />
              </a>
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col xl:gap-7 text-[#ABA9B4] md:text-[10px] lg:text-[15px] xl:text-[20px] font-light lg:gap-4 md:gap-2 ml-5 lg:pt-4">
          <a className="flex items-center gap-3" href="">
            <AiOutlineHome size={25}  />
            <Link to="/">Home</Link>
          </a>
          <a className="flex items-center gap-3" href="">
            <AiOutlineUser size={25} />
            <Link to="/about">About</Link>
          </a>
          <a className="flex items-center gap-3" href="">
            <BiServer size={25} />
            <Link to="/skills">Skills</Link>
          </a>{" "}
          <a className="flex items-center gap-3" href="">
            <AiOutlineFile size={25} />
            <Link to="/resume">Resume</Link>
          </a>
          <a className="flex items-center gap-3" href="">
            <RiBookReadLine size={25} />
            <Link to="/projects">Projects</Link>
          </a>
          <a className="flex items-center gap-3" href="">
            {" "}
            <AiOutlineMail size={25} />
            <Link to="/contact">Contact</Link>
          </a>
          {/* <Outlet /> */}
        </div>
        {/* <Footer /> */}
      </>
    </motion.div>
  );
};

export default Navbar;
