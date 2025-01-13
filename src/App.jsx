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
    <div className="w-screen min-h-screen overflow-x-hidden bg-black font-rockwell">
      <div className="w-full max-w-[100vw] relative !bg-black transition-all transform select-none !text-white !text-opacity-75">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Router> 
        <div className="container backdrop-blur-xl bg-white/0 min-h-screen mx-auto flex flex-col items-start justify-center">
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
          <div className="border-t border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 w-full">
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="flex flex-col items-center md:items-start space-y-4">
                  <div className="flex flex-col items-center md:items-start space-y-2">
                    <span className="text-lg font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                      @Barış-Yıldız
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                      <img src="../src/assets/gps1.svg" alt="" className="w-4 h-4 mr-2"/>
                      İstanbul/Türkiye
                    </span>
                    <span className="text-gray-400 text-sm">
                      Frontend Developer
                    </span>
                  </div>
                  <span className="flex items-center text-gray-500 text-xs"> 
                    <img src="../src/assets/c.svg" alt="" className="w-3 h-3 mr-1"/>
                    2024 Barış Yıldız - Tüm Hakları Saklıdır
                  </span>
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <span className="text-sm font-medium text-gray-400">
                    Beni Takip Edebilirsiniz
                  </span>
                  <div className="backdrop-blur-sm bg-gray-800/30 rounded-lg p-2">
                    <Links/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
