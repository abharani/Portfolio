// import Heading from "./Heading";
// import { BsSlack, BsTwitter } from "react-icons/bs";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { BiEnvelope } from "react-icons/bi";
// import { BsGeoAlt, BsPhone } from "react-icons/bs";

// import { motion } from "framer-motion";
// import { staggerContainer } from "../utils/motion";

// const slideIn = (direction) => ({
//   hidden: {
//     opacity: 0,
//     x: direction === "right" ? "-100%" : direction === "left" ? "100%" : 0,
//     delay: 1,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       type: "tween",
//       delay: 0.4,
//       duration: 0.7,
//     },
//   },
// });

// const Details = ({ title, text }) => {
//   return (
//     <div>
//       <h3 className="text-xl font-bold">{title}</h3>
//       <p className="text-gray-600">{text}</p>
//     </div>
//   );
// };

// const Input = ({ label, type }) => {
//   return (
//     <div>
//       <label form="" className="text-lg text-black">
//         {label}
//       </label>
//       <input
//         type={type}
//         className="ring-1 outline-none mt-1 ring-gray-300 px-4 py-2 min-w-[100px] xl:min-w-[250px]w-full"
//       ></input>
//     </div>
//   );
// };

// const Contact = () => {
//   return (
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0.25 }}
//       className=" bg-[#f8f8f8] py-10 px-36"
//     >
//       <Heading text="Contact" />

//       <div className="flex gap-6 mt-6">
//         <motion.div
//           variants={slideIn("right")}
//           initial="hidden"
//           whileInView="visible"
//           className="flex flex-col justify-between bg-white shadow-xl w-[35%] xl:w-[40%] xl:p-8 p-8"
//         >
//           <div className="flex flex-col gap-7 xl:gap-7">
//             <div className="flex gap-4">
//               <div className="flex items-center justify-center p-4  rounded-full bg-[#dff3fc] text-[#149ddd]">
//                 <BsGeoAlt size={23} />
//               </div>
//                <Details title="New Delhi, India 110084" />
//             </div>
//             <div className="flex gap-4 ">
//               <div className="flex items-center justify-center p-4 rounded-full bg-[#dff3fc] text-[#149ddd]">
//                 <BiEnvelope size={23} />
//               </div>
//               <Details title="Email:" text="abha.rangira@gmail.com" />
//             </div>
//             <div className="flex gap-4 ">
//               <div className="flex items-center justify-center p-4 rounded-full bg-[#dff3fc] text-[#149ddd]">
//                 <BsPhone size={23} />
//               </div>
//               <Details title="Call:" text="+91 7011231189" />
//             </div>
//           </div>

//           <div className="xl:mt-8  mt-6 flex flex-col gap-1 
//           px-8 items-start">
//             <div className="bg-[#2C2F3F] xl:w-32 xl:h-32 w-24 h-24 p-1  xl:mx-20 mx-10 rounded-full">
//               <img
//                 className="w-full h-full rounded-full"
//                 src="./images/profile1.jpg"
//                 alt="profile-img"
//               />
//             </div>
//             <p className="text-2xl xl:mx-20 mx-8 font-semibold my-[14px]">Abha Rani</p>

//             {/* Social Links */}
//             <div className="flex  xl:px-8 gap-3">
//               <div className="p-[10px] bg-[#dff3fc]  rounded-full">
//                 <a 
//                   href="https://www.linkedin.com/in/abha-rani-497196283"
//                   target="_blank"
//                 > <FaLinkedinIn size={23} /></a>
//               </div>
//               <div className="p-[10px] bg-[#dff3fc] rounded-full">
//                 <BsSlack size={23} />
//               </div>
//               <div className="p-[10px] bg-[#dff3fc] rounded-full">
//                 <BsTwitter size={23} />
//               </div>             
//               <div className="p-[10px] bg-[#dff3fc] rounded-full">
//                 <FaInstagram size={23} />
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* <motion.div
//           variants={slideIn("left")}
//           initial="hidden"
//           whileInView="visible"
//           className="bg-white shadow-xl xl:w-[60%] w-[50%] xl:p-8 p-6"
//         > */}
//         <motion.div
//           variants={slideIn("left")}
//           initial="hidden"
//           whileInView="visible"
//           className="bg-white shadow-xl w-[50%] p-8"
//         >
//           <form className="flex flex-col gap-6">
//             <div className="flex justify-between">
//               <Input type="text" label="Your Name" />
//               <Input type="text" label="Your Email" />
//             </div>
//             <Input type="text" label="Subject" />

//             <div>
//               <label className="text-lg  text-black">Message</label>
//               <textarea className="ring-1 mt-1 outline-none ring-gray-300 px-4 py-2 w-full h-40"></textarea>
//             </div>

//             <button className="inline-block self-center bg-[#149DDD] rounded-md text-white px-6 py-3 mt-4">
//               Send Message
//             </button>
//           </form>
//         </motion.div>

//         {/* <motion.div
//           variants={slideIn("left")}
//           initial="hidden"
//           whileInView="visible"
//           className="bg-white shadow-xl w-[50%] p-8"
//         >
//           <form className="flex flex-col gap-6">
//             <div className="flex justify-between">
//               <Input type="text"  label="Your Name" />
//               <Input  type="email" label="Your Email" />
//             </div>
//             <Input type="text" label="Subject" />

//             <div>
//               <label className="text-lg  text-black">Message</label>
//               <textarea className="ring-1 mt-1 outline-none ring-gray-300 px-4 py-2 w-full h-40"></textarea>
//             </div>

//             <button className="inline-block self-center bg-[#149DDD] rounded-md text-white px-6 py-3 mt-4">
//               Send Message
//             </button>
//           </form>
//         </motion.div> */}
//       </div>
//     </motion.div>
//   );
// };

// export default Contact;




















import Heading from "./Heading";
import { BsSlack, BsTwitter } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { BsGeoAlt, BsPhone } from "react-icons/bs";

import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

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
      delay: 0.6,
      duration: 0.7,
    },
  },
});

const Details = ({ title, text }) => {
  return (
    <div>
      <h3 className="xl:text-xl xl:font-semibold  lg:text-lg lg:text-semibold lg:text-align-center  ">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

const Input = ({ label, type }) => {
  return (
    <div>
      <label form="" className="text-md text-black">
        {label}
      </label>
      <input
        type={type}
        className="ring-1 outline-none mt-1 ring-gray-300  py-2 min-w-[250px] max-w-[360px] xl:max-w-[550px] xl:min-w-[300px]  w-full "
      ></input>
    </div>
  );
};

const Contact = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="contact"
      className="bg-white    py-16 md:px-10 lg:px-20 xl:px-36 "
    >
      <Heading text="Contact" />

      <div className="flex   gap-6 mt-6">
        <motion.div
          variants={slideIn("right")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-between bg-white shadow-xl w-[20%] xl:w-[40%] lg:w-[40%] md:w-[41%] xl:p-8 p-4"
        >
          <div className="flex flex-col gap-7">
            <div className="flex gap-4 ">
              <div className="flex items-center justify-center rounded-full p-4   bg-[#dff3fc] text-[#149ddd]">
                <BsGeoAlt size={23} />
              </div>
              <Details title="New Delhi, India 110084" />
            </div>
            <div className="flex gap-4">
              <div className="flex items-center justify-center   p-4  rounded-full bg-[#dff3fc] text-[#149ddd]">
                <BiEnvelope size={23} />
              </div>
              <Details title="Email:" text="abha.rangira@gmail.com" />
            </div>
            <div className="flex gap-4">
              <div className="flex items-center justify-center  p-4 rounded-full bg-[#dff3fc] text-[#149ddd]">
                <BsPhone size={23} />
              </div>
              <Details title="Call:" text="+91 7011231189" />
            </div>
          </div>

          <div className="mt-8  flex flex-col gap-1 items-start">
            <div className="bg-[#2C2F3F] w-32 h-32 p-1 self-center mx-20 rounded-full">
              <img
                className="w-full   h-full rounded-full"
                src="./images/profile1.jpg"
                alt="profile-img"
              />
            </div>
            <p className="text-2xl  self-center font-semibold my-[14px]">
              Abha Rani
            </p>

            {/* Social Links */}
            <div className="flex self-center pb-4 gap-3">
              <div className="p-[10px] bg-[#dff3fc] rounded-full">
                <a
                  href="https://www.linkedin.com/in/abha-rani-497196283"
                  target="_blank"
                >
                  {" "}
                  <FaLinkedinIn size={23} />
                </a>
              </div>
              <div className="p-[10px] bg-[#dff3fc] rounded-full">
                <BsSlack size={23} />
              </div>
              <div className="p-[10px] bg-[#dff3fc] rounded-full">
                <BsTwitter size={23} />
              </div>
              <div className="p-[10px] bg-[#dff3fc] rounded-full">
                <FaInstagram size={23} />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white shadow-xl md:w-[45%] lg:w-[50%] xl:w-[60%]  p-8 "
        >
          <form
            action="https://formspree.io/f/mwkgzrwp" method="POST"
            className="flex flex-col gap-6 pb-0 mb-0 xl:pr-8"
          >
            <Input type="text" id="name" label="Your Name" for="Name" name="name" required  />
            <Input type="email" id="email" label="Your Email"  for="email" name="email" required />

            <Input type="text" id="subject" label="Subject" name="subject" required />

            <div>
              <label className="text-lg  text-black">Message</label>
              <textarea name="message" required className="ring-1  outline-none ring-gray-300 px-4  w-full h-40"></textarea>
            </div>

            <button type="submit" value={"Send"} className="inline-block self-center bg-[#149DDD] rounded-md text-white px-6 py-3 mt-2">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;