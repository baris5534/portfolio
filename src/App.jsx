import Profileimg from "./components/Profileimg";
import Aboutme from "./components/Aboutme";
import Frameworks from "./components/Frameworks";
import Projects from "./components/Projects";
import Home from "./pages/Home";
import "@fontsource/montserrat";
import {BrowserRouter, Route, Routes} from "react-router-dom";
//import bgimg from "./assets/gdbg.jpg";
//import ScrollWord from "./components/scrollword/App";
// mobilde sağdan kenarlıklar çıkıyor düzeltilecek
function App() {
  return (
    <div className="!bg-black transition-all transform bg-[url('./assets/grbg.jg')]  select-none  bg-cover bg-no-repeat bg-center min-h-screen !text-white !text-opacity-75">
      <BrowserRouter>
            <Routes>
              <Route path="" element={<Home/>}/>
            </Routes>
          </BrowserRouter>
          <div className="container  flex-col backdrop-blur-xl bg-white/0 min-h-screen mx-auto flex items-start justify-center">
        <div className="flex flex-row max-lg:flex-col items-center justify-around h-screen  w-full py-5 px-10 border-b-2 border-black">
         <Profileimg/>
          
          <div className="flex w-5/12 max-xl:w-full">

            <div className="flex flex-col">
             <Aboutme/>
              
          </div>
        </div>
      </div>
      <div className="w-full py-5 border-b-2 border-black">
        <Frameworks/>
      </div>
      <div className="w-full py-5 border-b-2 border-black">
        <Projects/>
      </div>
    </div>
    </div>
  );
}

export default App;
