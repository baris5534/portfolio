import { lazy, Suspense, memo } from "react";

import Profileimg from "./components/Profileimg";
import Aboutme from "./components/Aboutme";
import Footer from "./components/layout/Footer";

import { MarqueeDemo } from "./components/marquee1";
import {LavaLamp} from "./components/common/Background/fluid-blob";

// Lazy loading ile geç yüklenen bileşenler
const Frameworks = lazy(() => import("./components/Frameworks"));
const Projects = lazy(() => import("./components/Projects"));

// Loading component
const LoadingSpinner = memo(function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
    </div>
  );
});

const App = memo(function App() {
  return (
    <div className="w-screen min-h-full overflow-x-hidden font-montserrat font-poppinsSemiBold relative bg-black bg-transparent">
     
      <LavaLamp />

      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-6 max-sm:pt-0"></div>
      <div className="relative z-10">
        <main className="container min-h-full mx-auto flex flex-col items-start justify-center">
          <section className="flex flex-col max-xl:flex-col lg:flex-col lg:h-[900px] max-2xl:h-[700px] max-lg:h-[820px] max-sm:w-full xl:h-[900px] items-center justify-around h-full max-l:h-[750px] w-full py-6 max-sm:py-2 px-10">
            <Profileimg />
            <article className="flex w-6/12 max-xl:w-full">
              <div className="flex flex-col">
                <Aboutme />
              </div>
            </article>
          </section>

          <MarqueeDemo />
          <section className="w-full">
            <Suspense fallback={<LoadingSpinner />}>
              <Frameworks />
            </Suspense>
          </section>

          <section className="w-full py-3">
            <Suspense fallback={<LoadingSpinner />}>
              <Projects />
            </Suspense>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
});

export default App;
