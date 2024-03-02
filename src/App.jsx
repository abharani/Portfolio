import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Resume from "./components/Resume/Resume"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import AboutMain from "./components/about/AboutMain"

function App() {

   return (
      <div className="flex overflow-x-hidden">
         <div className="bg-[#040B14] h-[100vh] w-80 flex flex-col justify-between fixed py-6 z-50">
            <Navbar />
            <Footer />
         </div>

         <div className="w-[100%] ml-80">
            <Home />
            <AboutMain />
            <Resume />
            <Portfolio />
            <Contact />
         </div>
      </div>
   )
}

export default App
