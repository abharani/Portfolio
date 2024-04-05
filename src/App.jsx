import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/about/About";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Facts from "./components/about/Facts";
import AboutMain from "./components/about/AboutMain";
function App() {
  return (
    <BrowserRouter>

        <div className="flex overflow-x-hidden">
          <div className="bg-[#040B14] h-[100vh] w-40 sm:w-60 xl:w-72 md:w-52 lg:w-64 flex flex-col justify-between fixed py-6 z-50">
            <Navbar />
            <Footer />
          </div>

          <div className="w-[100%] ml-40  lg:ml-64 sm:ml-56 xl:ml-64 md:ml-56">
          <Home/>
          <AboutMain/>
          <Resume/>
          <Portfolio/>
          <Contact/>
                {/* <Routes>
                
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Facts />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          
            </Routes> */}
          </div>
        </div>
      
     </BrowserRouter> 
  );
}

export default App;
