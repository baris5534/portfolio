import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profileimg from "./components/Profileimg";
import Aboutme from "./components/Aboutme";
import Frameworks from "./components/Frameworks";
import Projects from "./components/Projects";
import Home from "./pages/Home";
import Links from "./components/links";
import {} from "./index.css"
//import About from "./pages/About";
import "@fontsource/montserrat";
//import bgimg from "./assets/gdbg.jpg";
//import ScrollWord from "./components/scrollword/App";
// mobilde sağdan kenarlıklar çıkıyor düzeltilecek
function App() {
  return (
    <div className="!bg-black transition-all font-rockwell scroll- transform bg-[url('./assets/grbg.jg')]  select-none  bg-cover bg-no-repeat bg-center min-h-screen !text-white !text-opacity-75">
            <Router>
              <Routes>
              <Route path="/" element={<Home/>}/>
            </Routes>
         </Router> 
          <div className="container  flex-col  backdrop-blur-xl bg-white/0 min-h-screen mx-auto flex items-start justify-center">
        <div className="flex  flex-row max-xl:flex-col lg:flex-row lg:h-[600px] max-2xl:h-[700px] max-sm:w-full xl:h-screen items-center justify-around h-screen max-sm:h-screen max-xl:h-[950px]  w-full py-5 px-10">
         <Profileimg/>
          
          <div className="flex w-5/12 max-xl:w-full">
            <div className="flex flex-col">
             <Aboutme/>
              {/* <Router>
                <Routes >
                <Route path="/about" element={<About/>}/>
                </Routes>
              </Router> */}
          </div>
        </div>
      </div>
      <div className="w-full py-5 border-b-2 border-black">
        <Frameworks/>
      </div>
      <div className="w-full py-5 border-b-2 border-black">
        <Projects/>
      </div>
      <div className="border-t-2 text-white font-semibold border-gray-600 w-full h-auto">
        <div className="flex flex-row w-full max-lg:text-center  max-lg:space-y-5 items-center max-sm:flex-col justify-between py-3 px-10">
          <div className="flex flex-col">
            <span>@Barış-Yıldız</span>
            <span className="flex max-lg:mx-auto "><img src="../src/assets/gps1.svg" alt="" className="w-4 mr-1"/>İstanbul/Türkiye</span>
            <span>FrontEnd Developer</span>
            <span className="flex"> <img src="../src/assets/c.svg" alt="" className="mr-1"/> 2024 Barış Yıldız - Tüm Hakları Saklıdır</span>
          </div>
          <div>
            <span>Beni Takip Edebilirsiniz</span>
                <Links/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
