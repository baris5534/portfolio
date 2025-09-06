import { lazy, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "./lib/utils";

import Profileimg from "./components/Profileimg";
import Aboutme from "./components/Aboutme";
import Footer from "./components/layout/Footer";


import { MarqueeDemo } from "./components/marquee1"; //y
// import { renderCanvas } from "./components/canvas"; //y
import {LavaLamp} from "./components/common/Background/fluid-blob"; //y

// Lazy loading ile geç yüklenen bileşenler
const Frameworks = lazy(() => import("./components/Frameworks"));
const Projects = lazy(() => import("./components/Projects"));

function App() {
  // useEffect(() => {
  //   renderCanvas();
  // }, []);

  return (
    <div className="w-screen min-h-full overflow-x-hidden font-montserrat font-poppinsSemiBold relative bg-black bg-transparent">
     
      <LavaLamp />

      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0"></div>
      <div className="relative z-10">
        <main className="container min-h-full mx-auto flex flex-col items-start justify-center">
          <section className="flex flex-col max-xl:flex-col lg:flex-col lg:h-[900px] max-2xl:h-[700px] max-lg:h-[820px] max-sm:w-full xl:h-[900px] items-center justify-aroun h-full max-l:h-[750px] w-full py-6 px-10">
            <Profileimg />
            <article className="flex w-6/12 max-xl:w-full">
              <div className="flex flex-col">
                <Aboutme />
              </div>
            </article>
          </section>

          <MarqueeDemo />
          <section className="w-full">
            <Frameworks />
          </section>

          <section className="w-full py-3">
            <Projects />
          </section>

          <Footer />
        </main>
      </div>
      {/* <canvas
        className="bg-skin-base pointer-events-none fixed inset-0 mx-auto"
        id="canvas"
      ></canvas> */}
    </div>
  );
}

export default App;
