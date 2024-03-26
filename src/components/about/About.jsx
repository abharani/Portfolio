import { motion } from 'framer-motion';
import { staggerContainer } from "../../utils/motion";

import Heading from "../Heading";
import Bio from "./Bio";

const imgVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'tween',
      delay: 0.3,
      duration: 0.5
      
    }
  },
}

const bioVariant = {
  hidden: {
    opacity: 0,
    x: '100%'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      delay: 0.4,
      duration: 0.7
      
    }
  }
}

const About = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id='about'
      className="flex flex-col py-16 px-10 xl:px-36 gap-5"
    >
      <Heading text="About" />

      <div className="flex sm:flex-col lg:flex-row gap-10">
        <motion.div
          variants={imgVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-[25%] h-[auto] xl:w-[35%]"
        >
          <img
            className="w-full h-full object-cover"
            src="./images/profile.png"
            alt="profile-image"
          />
        </motion.div>

        <motion.div
          variants={bioVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-4 lg:w-[60%] xl:w-[65%]  md:w-[60%] md:text-sm lg:text-base xl:text-xl"
        >
          <h3 className="text-2xl font-semibold  text-[#122D52]">
            Full Stack Web Developer
          </h3>
          <p className="italic"></p>

          <Bio />

          <div className='pt-4' >
            <p >


              Certified Full Stack Web Developer skilled in
              Javascript, MongoDB, Express, React and Node Js, with
              problem-solving abilities in developing interactive, innovative
              and user-friendly web applications. My goal is to become an
              excellent web developer and apply my knowledge and skills to
              develop interactive, responsive and user-friendly web
              applications{" "}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About





