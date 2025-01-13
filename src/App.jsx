import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profileimg from "./components/Profileimg";
import Aboutme from "./components/Aboutme";
import Frameworks from "./components/Frameworks";
import Projects from "./components/Projects";
import Links from "./components/links";
import {} from "./index.css"
import "@fontsource/montserrat";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCopyright } from "react-icons/bi";
import ParticlesBackground from './components/common/Background/ParticlesBackground';

function App() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-black font-rockwell relative">
      <ParticlesBackground />
      
      <div className="relative z-10">
        {/* <header className="w-full max-w-[100vw] relative transition-all transform select-none text-white text-opacity-75">
          <nav>
            <Router>
              <Routes>
                <Route path="/" element={<Home/>}/>
              </Routes>
            </Router>
          </nav>
        </header> */}
        
        <main className="container backdrop-blur-xl bg-white/0 min-h-screen mx-auto flex flex-col items-start justify-center">
          <section className="flex flex-row max-xl:flex-col lg:flex-row lg:h-[600px] max-2xl:h-[700px] max-sm:w-full xl:h-screen items-center justify-around h-screen max-sm:h-screen max-xl:h-[950px] w-full py-5 px-10">
            <Profileimg/>
            <article className="flex w-5/12 max-xl:w-full">
              <div className="flex flex-col">
                <Aboutme/>
              </div>
            </article>
          </section>
          
          <section className="w-full py-5 border-b-2 border-black/10">
            <Frameworks/>
          </section>
          
          <section className="w-full py-5 border-b-2 border-black/10">
            <Projects/>
          </section>
          
          <footer className="border-t border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-950/50 backdrop-blur-sm w-full">
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="flex flex-col items-center md:items-start space-y-4">
                  <div className="flex flex-col items-center md:items-start space-y-2">
                    <span className="text-lg font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                      @Barış-Yıldız
                    </span>
                    <div className="flex items-center">
                      <HiOutlineLocationMarker className="w-[18px] h-[18px] text-blue-400 flex-shrink-0" />
                      <span className="text-gray-400 text-sm ml-2">İstanbul/Türkiye</span>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Frontend Developer
                    </span>
                  </div>
                  <div className="flex items-center">
                    <BiCopyright className="w-[14px] h-[14px] text-gray-500 flex-shrink-0" />
                    <span className="text-gray-500 text-xs ml-1">
                      2024 Barış Yıldız - Tüm Hakları Saklıdır
                    </span>
                  </div>
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
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
