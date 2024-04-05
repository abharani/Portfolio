import { motion } from 'framer-motion';
import { staggerContainer } from "../../utils/motion";

import Heading from "../Heading";
import Bio from "./Bio";

  

const bioVariant = {
  hidden: {
    opacity: 0,
    y: '70%'
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      delay: 0.2,
      duration: 0.6
      
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
      id="about"
      className="flex flex-col py-16 lg:px-10 xl:px-36 gap-5"
    >
      <Heading text="About" />

      <div className="flex  sm:flex-col lg:flex-row gap-10">
        <motion.div
          variants={bioVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-4 lg:w-[90%] xl:w-[100%]  md:w-[80%] md:text-sm lg:text-base xl:text-xl"
        >
          <h3 className="text-2xl font-semibold  text-[#122D52]">
            Full Stack Web Developer
          </h3>
          

          <Bio />

          <div className="pt-4">
            <p>
              Certified Full Stack Web Developer skilled in Javascript, MongoDB,
              Express, React and Node Js, with problem-solving abilities in
              developing interactive, innovative and user-friendly web
              applications. My goal is to become an excellent web developer and
              apply my knowledge and skills to develop interactive, responsive
              and user-friendly web applications{" "}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About





