import {motion} from 'framer-motion'
import Heading from '../Heading'
import { BsEmojiSmile, BsHeadset, BsJournalRichtext, BsPeople } from 'react-icons/bs';
import { staggerContainer } from '../../utils/motion';

const FactCard = ({figure, title, description}) => {
   return (
      <div className='flex flex-col -mt-1'>
         <p className='text-5xl font-extrabold mb-2'>{figure}</p>
         <p className='text-sm font-semibold'>{title}</p>
         <p className='text-sm text-slate-500'>{description}</p>
      </div>
   )
}

const slideUp = {
   hidden: {
      opacity: 0,
      y: '100%'
   },
   visible: {
      opacity: 1,
      y: 0,
      transition: {
         type: 'tween',
         delay: 0.3,
         duration: 0.5
      }
   }
}

const Facts = () => {
   return (
      <motion.div
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.25 }}
         className='flex flex-col gap-5 py-16 px-36'
      >
         <Heading text="Skills" />
         
         <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            className='grid grid-cols-4'
         >
            <div className='flex items-start gap-3 px-6 py-8'>
               <BsEmojiSmile className='text-[#149DDD]' size={42} />
               <FactCard figure='232' title='Happy Clients' description='consequuntur quae' />
            </div>
            <div className='flex items-start gap-3 px-6 py-8'>
               <BsJournalRichtext className='text-[#149DDD]' size={42} />
               <FactCard figure='521' title='Projects' description='consequuntur quae' />
            </div>
            <div className='flex items-start gap-3 px-6 py-8'>
               <BsHeadset className='text-[#149DDD]' size={42} />
               <FactCard figure='1453' title='Hours Of Support' description='consequuntur quae' />
            </div>
            <div className='flex items-start gap-3 px-6 py-8'>
               <BsPeople className='text-[#149DDD]' size={42} />
               <FactCard figure='52' title='Hard Workers' description='consequuntur quae' />
            </div>
         </motion.div>
      </motion.div>
   )
}

export default Facts