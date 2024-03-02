import { motion } from 'framer-motion';
import { staggerContainer, textVariant, textVariant2 } from '../utils/motion';
// import {bg_portfolio.jpeg} from "../public/images";
const Home = () => {
   return (
      <motion.div
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true, amount: 0.25 }}
         className="relative flex h-screen"
      >
         <div
            className="relative h-full w-full"
         >
            <img
               className=" w-full mx-5   "
               src="./images/background.jpg"
               alt=""
            />
            <div className="flex flex-col justify-center items-center absolute top-0 left-0 bottom-0 right-0 bg-black opacity-0">
            </div>
         </div>

         <div
            className="absolute bottom-32 left-80 text-white"
         >
            <motion.p
               variants={textVariant2}
               className="text-[64px] font-semibold"
            >Abha Rani</motion.p>
            <motion.p
               variants={textVariant(1.1)}
               className="text-3xl font-light"
            >Web Developer</motion.p>
         </div>
      </motion.div>
   )
}

export default Home