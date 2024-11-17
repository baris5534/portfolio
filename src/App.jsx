import Profileimg from "./components/Profileimg";
import Aboutme from "./components/Aboutme";
import Frameworks from "./components/Frameworks";
import "@fontsource/montserrat";

//import bgimg from "./assets/gdbg.jpg";
//import ScrollWord from "./components/scrollword/App";

function App() {
  return (
    <div className="!bg-black font-montserratExtraBold transition-all transform bg-[url('./assets/grbg.jg')]  select-none  bg-cover bg-no-repeat bg-center min-h-screen !text-slate-600 !text-opacity-75">
      <div className="container  flex-col backdrop-blur-md bg-white/10 min-h-screen mx-auto flex items-start justify-center">
        <div className="flex flex-row items-center justify-around h-screen  w-full py-5 px-10 border-b-2 border-black">
         <Profileimg/>
          
          <div className="flex w-5/12  ">

            <div className="flex flex-col">
             <Aboutme/>
              
          </div>
        </div>
      </div>
      <div className="w-full">
        <Frameworks/>
      </div>
    </div>
    </div>
  );
}

export default App;
