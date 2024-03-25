import { motion } from 'framer-motion'
import Heading from '../Heading'
import { staggerContainer } from '../../utils/motion';



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
      className="flex flex-col gap-5 lg:py-8 xl:px-36 p-1  lg:px-10"
    >
      <Heading text="Skills" />

      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-6 lg:grid-cols-5  xl:grid-cols-4"
      >
        <div className="flex items-start gap-3 px-6 py-8">
          <img src="https://th.bing.com/th?id=OIP.bN6cnS4rQ5PWJcYI9jFVGQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2" />
        </div>
        <div className="flex items-start gap-3 px-6 py-8">
          <img src="https://th.bing.com/th?id=OIP.MobEVh-brv26WdYdJmCrvgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2"></img>
        </div>
        <div className="flex items-start gap-3 px-6 py-8">
          <img src="https://th.bing.com/th/id/OIP.yUIb5S_kj98Eg5tT-Onx1AHaHa?w=250&h=250&c=7&r=0&o=5&dpr=1.2&pid=1.7" />
        </div>
        <div className="flex items-start gap-3 px-6 py-8">
          <img
            height="100%"
            src="https://th.bing.com/th/id/OIP.erfhCDqTDtIsbdMu1PbpRgHaEo?w=250&h=250&c=7&r=0&o=5&dpr=1.2&pid=1.7"
          />
        </div>
      </motion.div>
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-6 lg:grid-cols-5  xl:grid-cols-4"
      >
        <div className="flex items-start gap-3 px-6 py-8">
          <img src="https://th.bing.com/th/id/OIP.HCn9NkA9Oxf9wWol4u_QjgHaE8?w=250&h=250&c=7&r=0&o=5&dpr=1.2&pid=1.7" />
        </div>
        <div className="flex items-start gap-3 px-6 py-8">
          <img src="https://th.bing.com/th?id=OIP.Y-BbFmqRsIQWzX5BWC4mNQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2"></img>
        </div>

        <div className="flex items-start gap-3 px-6 py-8">
          <img src="https://th.bing.com/th/id/OIP.tVi-xAJFXwH3_9caWOkqTwHaHa?w=250&h=250&c=7&r=0&o=5&dpr=1.2&pid=1.7"></img>
        </div>
        <div className="flex items-start gap-3 px-6 py-8">
          <img src="https://th.bing.com/th/id/OIP.Ae6KuLbSCjSEbFBy2o2uiAHaHa?w=350&h=350&c=7&r=0&o=5&dpr=1.2&pid=1.7"></img>
        </div>
        {/* <div className="flex items-start gap-3 px-6 py-8">
           <img src="https://th.bing.com/th/id/OIP.xQJlilCdJ7U2ebPvc8DYLwHaIJ?w=250&h=250&c=7&r=0&o=5&dpr=1.2&pid=1.7"></img>
         </div>
         <div className="flex items-start gap-3 px-6 py-8">
           <img src="https://th.bing.com/th?id=OSK.e812bec137af36c10dfe4b944efa000b&w=250&h=250&c=7&o=6&dpr=1.2&pid=SANGAM"></img>
         </div>  */}
      </motion.div>
    </motion.div>
  );
}

export default Facts
