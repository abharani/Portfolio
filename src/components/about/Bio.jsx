import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Info = ({ title, detail }) => {
   return (
      <div className='flex items-center text-lg'>
         <MdOutlineKeyboardArrowRight
            size={30}
            className='text-[#149ddd]  -ml-2'
         />
         <p className='font-semibold md:text-sm lg:text-base xl:text-xl ml-[1px] mr-2'>{title}:</p>
         <p className='lg:text-base xl:text-xl md:text-sm'>{detail}</p>
      </div>
   )
}

const Bio = () => {
   return (
     <div className="flex">
       <div className="flex flex-col justify-start lg:w-[50%] sm:w-[100%] gap-3 ">
         {/* <Info title="Birthday" detail="18 August 1997" /> */}
         
         <Info title="Phone" detail="+91 7011231189" />
         <Info title="City" detail="New Delhi, INDIA" />
       </div>
       <div className="flex flex-col justify-start w-[50%] gap-3">
         {/* <Info title="Age" detail="26" /> */}
         <Info title="Degree" detail="B.Tech in EEE" />
         <Info title="Email" detail="abha.rangira@gmail.com" />
         
       </div>
     </div>
   );
}

export default Bio