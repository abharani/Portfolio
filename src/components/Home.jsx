import { motion } from "framer-motion";
import { staggerContainer, textVariant, textVariant2 } from "../utils/motion";
import { FaLinkedinIn, FaEnvelope, FaGithub } from "react-icons/fa";
import AbhaResume from "../assets/AbhaResume.pdf";
import AboutMain from "./about/AboutMain";
import Resume from "./Resume/Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
// import {bg_portfolio.jpeg} from "../public/images";

const imgVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.7,
      duration: 0.5,
    },
  },
};

const Home = () => {
  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="  justify-center   "
      >
        <div className=" flex lg:ml-16 xl:ml-0 md:justify-center lg:justify-end  h-full w-full ">
          <motion.div
            variants={imgVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="   "
          >
            {/* <img
              className=" rounded-xl md:mt-16 h-80 md:ml-20  lg:mr-64  lg:my-28  lg:w-64  xl:w-96 xl:h-[80vh] xl:my-4 xl:py-24 xl:pt-40 xl:rounded-3xl"
              // className=" border-[#42b5da] border-2 xl:border-4 rounded-full  bg-gradient-to-tl from-[#209cd6] to-teal-100 xl:my-28 xl:w-[70%] xl:mr-28 lg:w-[50%]  lg:mr-12 lg:my-28 mr-4 md:w-[40%] md:mt-16"
              src="./images/profile.png"
              alt=""
            /> */}
          </motion.div>
        </div>
        {/* mr-12 my-32 w-[25%] max-w-[25%] h-[auto] xl:max-w-[30%] xl:w-[30%] */}
        {/* md:mr-28 */}
        <div className="absolute md:top-[20vh] lg:top-[20vh] text-center sm:left-52 sm:top-96 left-20 top-72  xl:left-[60vh] lg:left-96 text-black  justify-center md:left-80 ">
          <motion.div
            variants={textVariant2}
            className="text-[24px] md:text-[20px]  lg:text-[32px] xl:text-[32px] "
          >
            H<span className="font-serif">ello, I am</span>
            <span className="md:text-[30px] font-serif xl:text-[60px]  text-[#147fdd] lg:text-[45px]   block font-bold ">
              {" "}
              Abha Rani
            </span>
          </motion.div>
          <motion.div
            variants={textVariant(1.1)}
            className="text-1xl md:text-lg  lg:text-3xl xl:text-[32px] font-semibold pb-4"
          >
            Web Developer
          </motion.div>
          <motion.div variants={textVariant(1.1)}>
            <button
              className="bg-white hover:bg-gray-300  text-black border-black border-2 lg:text-xl lg:font-bold  font-medium text-base py-1 px-2 rounded-xl"
              onClick={() => window.open(AbhaResume, "_blank")}
            >
              Download CV
              {/* <a
                href="https://drive.google.com/file/d/1tOM2C06kzFMpmWL95VfPNUEkEEpOb1fm/view?usp=sharing"
                target="_blank"
                // download={AbhaResume.pdf
                download={"AbhaResume.pdf"}
              >
                Download CV */}
              {/* </a> */}
            </button>
            {/* <button className=" border rounded-2xl border-black text-black text-lg gap-3">Download CV</button> */}
            <div className="flex mt-4 gap-1 justify-center lg:gap-4 xl:pt-4 ">
              <div className="lg:p-[10px] p-[4px] bg-[#2C2F3F] rounded-full text-white">
                <a href="https://mail.google.com/mail?hl=en" target="_blank">
                  <FaEnvelope className="md:text-lg lg:text-2xl" />
                  {/* <FaEnvelope size={25} href=""  /> */}
                </a>
              </div>
              <div className="lg:p-[10px]  p-[4px] bg-[#2C2F3F] text-white rounded-full">
                <a
                  href="https://www.linkedin.com/in/abha-rani-497196283"
                  target="_blank"
                >
                  <FaLinkedinIn className="md:text-lg lg:text-2xl" />
                </a>
              </div>
              <div className="lg:p-[10px] p-[4px] bg-[#2C2F3F] text-white  rounded-full">
                <a href="https://github.com/abharani" target="_blank">
                  <FaGithub className="md:text-lg lg:text-2xl" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* <AboutMain />
      <Resume />
      <Portfolio />
      <Contact /> */}
    </>
  );
};

export default Home;
