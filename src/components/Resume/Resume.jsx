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
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="text-black text-lg py-16 px-36"
    >
      <Heading text={"Resume"} />

      <div className="flex text-[#272829] font-sans">
        <motion.div
          variants={slideIn("right")}
          initial="hidden"
          whileInView="visible"
          className="w-1/2"
        >
          <h3 className="  font-bold  text-[#050d18] text-2xl my-5">Summary</h3>
          <div className=" relative pl-5 -scroll-mt-0.5 border-l-2 border-[#1f5297] pb-0 pt-0 pr-0 ">
            <h4 className=" text-lg font-semibold font-sans text-[#050d18] mt-0 mb-2.5">
              Abha Rani
            </h4>
            <p className="box-border italic mt-0 mb-4 pr-2">
              Innovative and deadline-driven Web Developer with 6 months of
              training experience in developing interactive, responsive and
              user-friendly web applications .
            </p>
            <ul className="mt-0 mb-4 pl-5 block list-disc ">
              <li className=" pb-2.5 list-item ">New Delhi, India 110084</li>
              <li className=" pb-2.5">(+91) 7011231189</li>
              <li className=" pb-2.5">abha.rangira@gmail.com</li>
            </ul>
          </div>
          <h3 className=" font-bold  text-[#050d18] text-2xl my-5">
            Education
          </h3>
          <div className="relative pl-5 -scroll-mt-0.5 border-l-2 border-[#1f5297] pb-0 pt-0 pr-0 ">
            <h3 className=" text-lg font-semibold font-sans text-[#050d18] mt-0 mb-2.5">
              Bachelor of Technology in Electrical and Electronics Engineering
            </h3>
            <h5 className=" text-base bg-[#e4edf9] py-1.5 px-4 inline-block font-semibold mb-2.5 mt-0 font-sans">
              2016-2020
            </h5>
            <p className="mt-0 mb-4 italic">
              Guru Gobind Singh Indraprastha University, New Delhi
            </p>
            <p className="box-border mt-0 mb-4">
              Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam
              iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti
              nerada porti sand markend
            </p>
          </div>

          <h3 className=" text-2xl font-bold font-sans  my-5 text-black">
            Soft Skills
          </h3>
          <div className="relative pl-5 -scroll-mt-0.5 border-l-2 border-[#1f5297] pb-0 pt-0 pr-0 ">
            <ul className="mt-0 mb-4 pl-5 block list-disc ">
              <li>Creative</li>
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Problem Solving</li>
              <li>Time Management</li>
            </ul>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          variants={slideIn("left")}
          initial="hidden"
          whileInView="visible"
          className="w-1/2"
        >
          <h3 className="font-bold text-[#050d18] text-2xl my-5">
            Professional Experience
          </h3>
          <div className="relative pl-5 -scroll-mt-0.5 border-l-2 border-[#1f5297] pb-5 pt-0 pr-0 ">
            <h4 className=" text-lg font-semibold font-sans text-[#050d18] mt-0 mb-2.5">
              AlmaBetter — Trainee
            </h4>
            <h5 className=" text-base bg-[#e4edf9] py-1.5 px-4 inline-block font-semibold mb-2.5 mt-0 font-sans">
              2023-Present
            </h5>
            <p className="mt-0 mb-4 italic">Bangalore, Karnataka, India</p>
            <ul className="mt-0 mb-4 pl-5 block list-disc ">
              <li className=" pb-2.5 list-item ">
                Full Stack Web Development trainee in MERN Stack with six months
                of intensive training in content along with projects.
              </li>
              <li className="pb-2.5">
                Acquired practical expertise in both front-end and back-end
                languages and tools, like React, Node.js, and MongoDB, to build
                robust web applications.
              </li>
              <li className="pb-2.5">
                Built and deployed fully functional, responsive, full-stack web
                applications utilizing MERN stack with authentication and best
                practices.
              </li>
              <li className="pb-2.5">
                Demonstrated excellent performance with good communication
                skills, ranking in the top 5% in the cohort of 250 students.
              </li>
            </ul>
          </div>
          <h3 className=" font-bold  text-[#050d18] text-2xl my-5">
            Achievements
          </h3>
          <div className="relative pl-5 -scroll-mt-0.5 border-l-2 border-[#1f5297] pb-0 pt-0 pr-0 ">
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
    </motion.div>
  );
};

export default Resume;
