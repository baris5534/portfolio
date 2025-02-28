import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Profileimg from "./components/Profileimg";
import Aboutme from "./components/Aboutme";
import ParticlesBackground from './components/common/Background/ParticlesBackground';
import Footer from './components/layout/Footer';
//import patternBg from './assets/Pattern.png';

// Lazy loading ile geç yüklenen bileşenler
 const Frameworks = lazy(() => import("./components/Frameworks"));
const Projects = lazy(() => import("./components/Projects"));

function App() {
  return (
    <div className="w-screen min-h-full overflow-x-hidden font-rockwell relative">
      <ParticlesBackground />
      
      <div className="relative z-10">
        <main className="container bg-white/0 min-h-full mx-auto flex flex-col items-start justify-center">
          <section className="flex flex-col max-xl:flex-col lg:flex-col lg:h-[900px] max-2xl:h-[700px] max-sm:w-full xl:h-full items-center justify-around h-full max-xl:h-[750px] w-full py-6 px-10" >
            <Profileimg/>
            <article className="flex w-6/12 max-xl:w-full">
              <div className="flex flex-col">
                <Aboutme/>
              </div>
            </article>
          </section>
          
          {/* <Suspense fallback={<div className="w-full h-32 flex items-center justify-center">
            <div className="animate-pulse text-white/50">Yükleniyor...</div>
          </div>}> */}
            <section className="w-full py-3 mt-4">
              <Frameworks/>
            </section>
            
            <section className="w-full py-3">
              <Projects/>
            </section>
          {/* </Suspense> */}

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
