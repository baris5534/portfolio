import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import code from "/code.png";
import nenedir from "/favicon.svg";
import calculator from "/calculatorDark.png";

const Projects = () => {
    
        const projects = [
          { id: 1, title: "Ne Nedir Blog", img: nenedir, description: "Yazılım dilleri ve Frameworkler hakkında bilgi veriyorum", projectUrl: "https://ne-nedir.netlify.app", status: "Tamamlandı" },
          { id: 2, title: "Hesap Makinesi", img: calculator, description: "Vue ile yapılmış basit bir hesap makinesi", projectUrl: "https://calculatorapp-bay.vercel.app", status: "Tamamlandı" },
          { id: 22, title: "Proje ismi", img: code, description: "Projelerim için beklemede kalın", projectUrl: "https://github.com/username/project", status: "Yakında" },
        ];
      
        const sliderRef = useRef(null);
  const [dragLimits, setDragLimits] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const calculateDragLimits = () => {
      if (sliderRef.current) {
        const sliderWidth = sliderRef.current.scrollWidth;
        const containerWidth = sliderRef.current.offsetWidth;
        
        setDragLimits({
          left: -(sliderWidth - containerWidth),
          right: 0
        });
      }
    };

    calculateDragLimits();
    window.addEventListener("resize", calculateDragLimits);

    return () => window.removeEventListener("resize", calculateDragLimits);
  }, []);

  // Status badge renklerini belirleyelim
  const getStatusStyle = (status) => {
    switch(status) {
      case "Tamamlandı":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "Devam Ediyor":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "Geliştirme Aşamasında":
        return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
      default:
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    }
  };

  return (
    <div className="w-full overflow-hidden py-10">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 px-10 max-sm:px-5 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Projelerim
        </h2>
        <div className="relative w-full">
          <motion.div 
            ref={sliderRef}
            drag="x"
            dragConstraints={dragLimits}
            className="flex gap-4 px-10 max-sm:px-5 mr-4"
            style={{ 
              cursor: "grab",
            }}
            //dragElastic={0.1}
            whileTap={{ cursor: "grabbing" }}
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                className="relative bg-gradient-to-b from-gray-900 to-gray-800 
                           border border-gray-800 rounded-2xl overflow-hidden
                           shadow-xl backdrop-blur-sm
                           hover:border-gray-700 transition-all duration-300"
                style={{
                  minWidth: "200px",
                  width: "200px",
                  maxWidth: "200px",
                  height: "300px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexShrink: 0,
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.2)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full pt-6 px-4">
                  {/* Status Badge */}
                  <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2">
                    <div className={`px-3 py-1 rounded-b-lg border 
                                   ${getStatusStyle(project.status)}
                                   text-xs text-center pt-2 font-medium tracking-wider uppercase`}>
                      {project.status}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-3 mt-7">
                    <div className="p-3 rounded-xl select-none pointer-events-none bg-gradient-to-b from-gray-800 to-gray-900
                                  border border-gray-700/50 shadow-inner">
                      <img
                        className="max-w-16 max-h-16 size-14 object-contain drop-shadow-2xl select-none filter brightness-110"
                        src={project.img}
                        alt={project.title}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <p className="text-xs text-center text-gray-400 line-clamp-2 mb-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="w-full p-4 bg-gray-900/50 border-t border-gray-800">
                  <div className="flex flex-col items-center space-y-2">
                    <div className={`h-0.5 w-12 rounded-full 
                                   ${project.status === "Tamamlandı" ? "bg-gradient-to-r from-emerald-500 to-green-500" :
                                     project.status === "Devam Ediyor" ? "bg-gradient-to-r from-amber-500 to-orange-500" :
                                     "bg-gradient-to-r from-indigo-500 to-blue-500"} 
                                   opacity-70`}>
                    </div>
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center
                               px-3 py-1.5 w-full
                               overflow-hidden rounded-lg
                               bg-gradient-to-br from-blue-500 to-purple-600
                               text-white font-medium text-xs
                               transition-all duration-300
                               hover:from-blue-600 hover:to-purple-700
                               active:scale-95"
                    >
                      <span className="relative flex items-center gap-1">
                        Projeyi İncele
                        <svg 
                          className="w-3 h-3 transition-transform group-hover:translate-x-1" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};


export default Projects;