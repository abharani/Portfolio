import { staggerContainer } from "../utils/motion";
import Heading from "./Heading";
import { motion } from "framer-motion";
import todo from "../assets/todo.png";
import todolist from "../assets/todolist.png";
import cryptoDashboard from "../assets/cryptoDashboard.png";
import flipkart from "../assets/flipkart.png";
import newsclone from "../assets/newsclone.png";
import youtube from "../assets/youtube.png";
import portfolio from "../assets/portfolio.png";

const slideUp = {
  hidden: {
    opacity: 0,
    y: "25%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      delay: 0.3,
      duration: 0.5,
    },
  },
};

const Portfolio = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="projects"
      className=" "
    >
      <div className="text-black  py-16  px-10 xl:px-36  w-full ">
        <Heading text="Projects" />
        <div className="flex flex-col">
          <div className="w-full ">
            <div className="grid grid-cols-1 gap-10 place-content-center">
              {/* {images.map((imageUrl, idx) => ( */}
              <motion.div
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-3 xl:gap-5 sm:flex-row"
              >
                <div className="max-w-lg rounded overflow-hidden shadow-lg">
                  {/* Wrap the image with an anchor tag */}
                  <a href={portfolio} target="_blank">
                    <img
                      className="w-full"
                      src={portfolio}
                      alt="Description of the image"
                    />
                  </a>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Portfolio</div>
                    <p className="text-gray-700 text-base">
                      <ul>
                        <li className="lg:text-sm">
                          Portfolio designed using React{" "}
                        </li>
                      </ul>
                      JavaScript || React || TailwindCSS || Framer Motion ||
                    </p>
                  </div>
                </div>
                <div className="max-w-lg rounded overflow-hidden shadow-lg">
                  {/* Wrap the image with an anchor tag */}
                  <a
                    href="https://cryptocurrency-dashboard-sigma.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full"
                      src={cryptoDashboard}
                      alt="crypto-dashboard"
                    />
                  </a>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      Crypto Currency Dashboard
                    </div>
                    <p className="text-gray-700 lg:text-sm xl:text-base">
                      Web app providing real time and historical data of crypto
                      currencies with their market capital value on various
                      graphs for different time duration with an exchange
                      feature.
                      <p className="lg:text-base">
                        {" "}
                        React || TailwindCSS || Redux ||Coin gecko Api || React
                        Charts
                      </p>
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:flex-row lg:grid-cols-2 gap-3 xl:gap-5"
              >
                <div className="max-w-lg rounded overflow-hidden shadow-lg">
                  {/* Wrap the image with an anchor tag */}
                  <a
                    href="https://get-youtube-subscribers-o1sr.onrender.com/"
                    target="_blank"
                  >
                    <img
                      className="w-full"
                      src={youtube}
                      alt="Description of the image"
                    />
                  </a>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      YouTube Subscriber App
                    </div>
                    <p className="text-gray-700 lg:text-sm xl:text-base">
                      Provides RESTful APIs with endpoints for managing YouTube
                      Subscriber's data retrieval in JSON format. Implemented
                      endpoints for:
                      <ul>
                        <li>- Get all subscribers data</li>
                        <li>
                          - Get all subscriber's names and subscribed channels
                        </li>
                        <li>- Get a specific subscriber information by ID.</li>
                      </ul>
                      <p className="lg:text-base">
                        Node.js ||Express ||MongoDB || Mongoose || Swagger
                      </p>
                    </p>
                  </div>
                </div>
                <div className="max-w-lg rounded overflow-hidden shadow-lg">
                  {/* Wrap the image with an anchor tag */}
                  <a href="https://todo-abharani.vercel.app/" target="_blank">
                    <img className="w-full" src={todo} alt="To do app" />
                  </a>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      To-Do Application
                    </div>
                    <p className="text-gray-700 lg:text-sm xl:text-base">
                      To-do app simplifies task management, allowing you to
                      effortlessly create, prioritize, edit, and delete tasks
                      effortlessly. Stay organized, boost productivity, and
                      never miss a deadline again!
                      <ul>
                        <li>- Editing and update the task once created</li>
                        <li>- Delete the task once completed</li>
                        <li className="lg:text-base">
                          JavaScript || TailwindCSS || React ||
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:flex-row lg:grid-cols-2 xl:gap-5 gap-3"
              >
                <div className="max-w-lg rounded overflow-hidden shadow-lg">
                  {/* Wrap the image with an anchor tag */}
                  <a href={flipkart} target="_blank">
                    <img
                      className="w-full"
                      src={flipkart}
                      alt="Flipkart clone"
                    />
                  </a>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Flipkart Clone</div>
                    <p className="text-gray-700 text-base">
                      JavaScript || React || TailwindCSS
                    </p>
                  </div>
                </div>
                <div className="max-w-lg rounded overflow-hidden shadow-lg">
                  {/* Wrap the image with an anchor tag */}
                  <a
                    href="https://main--newsclonegoogle.netlify.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full"
                      src={newsclone}
                      alt="Description of the image"
                    />
                  </a>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      Google News UI Clone
                    </div>
                    <p className="text-gray-700 text-base">
                      JavaScript || React || Bootstrap
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
