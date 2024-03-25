import { motion } from 'framer-motion';
import { staggerContainer, textVariant, textVariant2 } from '../utils/motion';
import AboutMain from './about/AboutMain';
import Resume from './Resume/Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
// import {bg_portfolio.jpeg} from "../public/images";
const Home = () => {
   return (<>
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
               className=" w-full mx-0 md:h-[95vh] md:w-[190vh] "
               src="./images/background.jpg"
               alt=""
            />
            <div className="flex flex-col justify-center items-center absolute top-0 left-0 bottom-0 right-0 bg-black opacity-0">
            </div>
         </div>

         <div
            className="absolute md:top-[70vh]     sm:left-52 sm:top-96 left-40 top-72  xl:left-96 lg:left-64 text-white md:left-52"
         >
            <motion.p
               variants={textVariant2}
               className="text-[24px] md:text-[30px]  lg:test-[40px] font-semibold"
            >Abha Rani</motion.p>
            <motion.p
               variants={textVariant(1.1)}
               className="text-1xl md:text-2xl  lg:text-3xlfont-normal"
            >Web Developer</motion.p>
         </div>
      </motion.div>
      <AboutMain />
      <Resume />
      <Portfolio />
      <Contact />
      </>
   )
}

export default Home