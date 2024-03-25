import { motion } from "framer-motion"
import { footerVariants } from "../utils/motion"


const Footer = () => {
   return (
      <motion.div
         variants={footerVariants}
         initial="hidden"
         whileInView="show"
         className="flex flex-col items-center text-white mx-auto text-sm  align-middle"
      >
      
         <div>
            Designed by 
            <a
               className="text-[#37B3ED]"
               href="https://bootstrapmade.com/"
            >
               &nbsp;Abha Rani
            </a>
         </div>
      </motion.div>
   )
}

export default Footer
