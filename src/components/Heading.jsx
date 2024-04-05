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
      delay: 0.4,
      duration: 0.6,
    },
  },
});

const Heading = ({ text }) => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div
        variants={slideIn("right")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-5 mb-8">
          <h2 className="font-bold text-4xl text-[#122D52]">{text}</h2>
          <hr className="w-14 border-b-4 border-b-[#149ddd]" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Heading;
