import { lazy, Suspense } from "react";
import Profileimg from "./components/Profileimg";
import Aboutme from "./components/Aboutme";
import ParticlesBackground from './components/common/Background/ParticlesBackground';
import Footer from './components/layout/Footer';

// Lazy loading ile geç yüklenen bileşenler
const Frameworks = lazy(() => import("./components/Frameworks"));
const Projects = lazy(() => import("./components/Projects"));

function App() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-black font-rockwell relative">
      <ParticlesBackground />
      
      <div className="relative z-10">
        <main className="container backdrop-blur-xl bg-white/0 min-h-screen mx-auto flex flex-col items-start justify-center">
          <section className="flex flex-row max-xl:flex-col lg:flex-row lg:h-[600px] max-2xl:h-[700px] max-sm:w-full xl:h-screen items-center justify-around h-screen max-sm:h-screen max-xl:h-[950px] w-full py-5 px-10">
            <Profileimg/>
            <article className="flex w-5/12 max-xl:w-full">
              <div className="flex flex-col">
                <Aboutme/>
              </div>
            </article>
          </section>
          
          <Suspense fallback={<div className="w-full h-32 flex items-center justify-center">
            <div className="animate-pulse text-white/50">Yükleniyor...</div>
          </div>}>
            <section className="w-full py-5 ">
              <Frameworks/>
            </section>
            
            <section className="w-full py-5">
              <Projects/>
            </section>
          </Suspense>

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
