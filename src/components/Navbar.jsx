import { BsSkype, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineFile, AiOutlineHome, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { RiBookReadLine } from 'react-icons/ri';
import { BiServer } from 'react-icons/bi';

import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import { Link } from 'react-router-dom';


const Navbar = () => {
   return (
     <motion.div
       variants={navVariants}
       initial="hidden"
       whileInView="show"
       className="text-white space-y-11 px-4"
     >
       {/* Profile */}
       <div className="flex flex-col gap-1 items-center">
         <div className="bg-[#2C2F3F] w-48 h-48 p-1 rounded-full">
           <img
             className="w-full h-full rounded-full"
             src="./images/profile1.jpg"
             alt="profile-img"
           />
         </div>
         <p className="text-2xl font-semibold my-[14px]">Abha Rani</p>

         {/* Social Links */}
         <div className="flex gap-3">
           <div className="p-[10px] bg-[#2C2F3F] rounded-full">
             <BsTwitter size={15} />
           </div>

           <div className="p-[10px] bg-[#2C2F3F] rounded-full">
             <FaFacebookF size={15} />
           </div>

           <div className="p-[10px] bg-[#2C2F3F] rounded-full">
             <FaInstagram size={15} />
           </div>

           <div className="p-[10px] bg-[#2C2F3F] rounded-full">
             <BsSkype size={15} />
           </div>

           <div className="p-[10px] bg-[#2C2F3F] rounded-full">
             <FaLinkedinIn size={15} />
           </div>
         </div>
       </div>

      {/* Nav Links */}
        <div className='flex flex-col gap-7 text-[#ABA9B4] text-[15px] font-light ml-5'> 
      <a className='flex items-center gap-3' href="">
               <AiOutlineHome size={25} />
               <p>Home</p>
            </a>
            <a className='flex items-center gap-3' href=""  >
               <AiOutlineUser size={25} />
               <p>About</p>
            </a> <a className='flex items-center gap-3' href="">
               <AiOutlineFile size={25} />
               <p>Resume</p>
            </a>
            <a className='flex items-center gap-3' href="">
               <RiBookReadLine size={25} />
               <p>Projects</p>
            </a>  <a className='flex items-center gap-3' href="">
               <BiServer size={25} />
               <p>Skills</p>
            </a>
            <a className='flex items-center gap-3' href=""> <AiOutlineMail size={25} />
               <p>Contact</p>
            </a>
         </div>
      </motion.div>  
      
   );
}

export default Navbar