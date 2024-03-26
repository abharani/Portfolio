import { staggerContainer } from "../../utils/motion";
import Heading from "../Heading";
import { motion } from "framer-motion";

const slideIn = (direction) => ({
  hidden: {
    opacity: 0,
    x: direction === "right" ? "-100%" : direction === "left" ? "100%" : 0,
    delay: 1,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      delay: 0.4,
      duration: 0.7,
    },
  },
});

const Resume = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="resume"
      className="text-black text-lg py-16 xl:px-36 px-10"
    >
      <Heading text={"Resume"} />

      <div className="flex text-[#272829] font-sans gap-1 xl:gap-12">
        <motion.div
          variants={slideIn("right")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}

          className="lg:w-1/2 px-0 xl:px-0 xl:w-1/2 md:w-1/3"
        >
          <h3 className="  font-bold text-xl xl:text-2xl text-[#050d18]  my-5">Summary</h3>
          <div className=" relative lg:text-sm xl:text-lg  pl-5 -scroll-mt-0.5 border-l-2 border-[#1f5297] pb-0 pt-0 pr-0 ">
            <h4 className=" text-lg font-semibold font-sans text-[#050d18] mt-0 mb-2.5">
              Abha Rani
            </h4>
            <p className="box-border italic mt-0 mb-4 ">
              Innovative and deadline-driven Web Developer with 6 months of
              training experience in developing interactive, responsive and
              user-friendly web applications .
            </p>
            <ul className="mt-0 mb-4 pl-5 block list-disc ">
              <li className=" pb-2.5 list-item ">New Delhi, India 110084</li>
              <li className=" pb-2.5">(+91) 7011231189</li>
              <li className=" pb-2.5">abha.</li>
            </ul>
          </div>
          <h3 className=" font-bold  text-[#050d18] text-xl xl:text-2xl my-5">
            Education
          </h3>
          <div className="relative pl-5 -scroll-mt-0.5 border-l-2 border-[#1f5297] pb-0 pt-0 pr-0 ">
            <h3 className=" text-lg font-semibold font-sans text-[#050d18] mt-0 mb-2.5 lg:text-base xl:text-lg">
              Bachelor of Technology in Electrical and Electronics Engineering
            </h3>
            <h5 className=" text-base bg-[#e4edf9] py-1.5 px-4 inline-block font-semibold lg:text-sm xl:text-lg mb-2.5 mt-0 font-sans">
              2016-2020
            </h5>
            <p className="mt-0 mb-4 italic lg:text-sm xl:text-lg">
              Guru Gobind Singh Indraprastha University, New Delhi
            </p>

            <h3 className=" text-lg lg:text-base xl:text-lg font-semibold font-sans text-[#050d18] mt-0 mb-2.5">
              Senior Secondary School
            </h3>
            <h5 className=" text-base bg-[#e4edf9] py-1.5 px-4 inline-block font-semibold mb-2.5 lg:text-sm xl:text-lg mt-0 font-sans">
              2015-2016
            </h5>
            <p className="mt-0 mb-4 italic lg:text-sm xl:text-lg">kendriya Vidyalaya Shalimar Bagh, New Delhi</p>
          </div>

          <h3 className="font-bold  text-[#050d18] text-xl xl:text-2xl my-5">
            Soft Skills
          </h3>
          <div className="relative  lg:text-sm xl:text-lg pl-5 -scroll-mt-0.5 border-l-2 border-[#1f5297] pb-0 pt-0 pr-0 ">
            <ul className="mt-0  mb-4 pl-5 block list-disc ">
              <li className="  xl:pb-1.5 pb-2.5 list-item ">Creative</li>
              <li className="xl:pb-1.5 pb-2.5 list-item ">Communication</li>
              <li className="xl:pb-1.5 pb-2.5 list-item ">Teamwork</li>
              <li className="xl:pb-1.5 pb-2.5 list-item ">Problem Solving</li>
              <li className="xl:pb-1.5 pb-2.5 list-item ">Time Management</li>
            </ul>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          variants={slideIn("left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}

          className="lg:w-1/2  xl:w-1/2 md:w-1/3 xl:px-0"
        >
          <h3 className="font-bold text-[#050d18] text-xl xl:text-2xl  my-5">
            Professional Experience
          </h3>
          <div className="relative lg:text-sm xl:text-lg pl-5 -scroll-mt-0.5 border-l-2 border-[#1f5297] pb-5 pt-0 pr-0 ">
            <h4 className=" text-lg font-semibold font-sans text-[#050d18] mt-0 mb-2.5">
              AlmaBetter — Trainee
            </h4>
            <h5 className=" text-base bg-[#e4edf9] py-1.5 px-4 inline-block font-semibold lg:text-sm xl:text-lg mb-2.5 mt-0 font-sans">
              2023-Present
            </h5>
            <p className="mt-0 mb-4 italic">Bangalore, Karnataka, India</p>
            <ul className="mt-0 mb-4 pl-5 block list-disc lg:text-base xl:text-lg sm:text-sm">
              <li className=" lg:pb-3  xl:pb-2.5 list-item ">
                Full Stack Web Development trainee in MERN Stack with one year
                of intensive training in content along with projects.
              </li>
              <li className="lg:pb-3 xl:pb-2.5">
                Acquired practical expertise in both front-end and back-end
                languages and tools, like React, Node.js, Express and MongoDB,
                to build robust web applications.
              </li>
              <li className="lg:pb-3 xl:pb-2.5">
                Built and deployed fully functional, responsive, full-stack web
                applications utilizing MERN stack with authentication and best
                practices.
              </li>
              <li >
                Demonstrated excellent performance with good communication
                skills, ranking in the top 5% in the cohort of 250 students.
              </li>
            </ul>
          </div>
          <h3 className=" font-bold  xl:text-2xl text-[#050d18] text-xl my-5">
            Achievements
          </h3>
          <div className="relative pl-5 -scroll-mt-0.5 lg:text-sm xl:text-lg border-l-2 border-[#1f5297] pb-0 pt-0 pr-0 ">
            <ul className="mt-0 mb-4 pl-5 block list-disc ">
              <li className=" pb-2.5 list-item ">
                Published a research paper on HUMAN COMPUTER INTERACTION-an
                overview of Software Architecture.
              </li>
              <li className=" pb-2.5 list-item ">
                Received best Idea award at a hackathon, VSSUT
              </li>
              <li className=" pb-2.5 list-item ">
                Student Volunteer Head at IEEE.
              </li>
              <li className=" pb-2.5 list-item ">
                North Zone Level Kabaddi Player
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;
