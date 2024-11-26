import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import code from "../assets/code.png"

const Projects = () => {
    
        const projects = [
          { id: 1, title: "Proje ismi", img: code, level:"Projelerim için beklemede kalın " },
        ];
      
        const sliderRef = useRef(null);
  const [dragLimits, setDragLimits] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const calculateDragLimits = () => {
      if (sliderRef.current) {
        const sliderWidth = sliderRef.current.scrollWidth; // Slider toplam genişliği
        const visibleWidth = sliderRef.current.offsetParent.offsetWidth; // Görünür alan genişliği
        setDragLimits({
          left: visibleWidth - sliderWidth,
          right: 0,
        });
      }
    };

    calculateDragLimits(); // İlk yüklemede hesapla
    window.addEventListener("resize", calculateDragLimits); // Ekran boyutu değişirse yeniden hesapla

    return () => window.removeEventListener("resize", calculateDragLimits);
  }, []);

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        padding: "20px 0",
      }}
    >
      <h2 className="text-white text-2xl mb-5 px-10 max-sm:px-5">Projelerim</h2>
      <motion.div 
      className="px-10 max-sm:px-5"
        ref={sliderRef}
        drag="x"
        dragConstraints={dragLimits}
        style={{
          display: "flex",
          gap: "16px",
          cursor: "grab",
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gradient-to-r from-gray-800 text-center to-gray-900 p-4 rounded-lg shadow-md"
            style={{
              minWidth: "200px",
              maxWidth: "200px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            // whileInView={{
            //   scale: 1,
            //   opacity: 1,
              
            // }}
            animate={{
              scale:1,
              opacity:1,
            }}
            whileHover={{
              scale: 1.05,
            }}
            transition={{ type: "easeInOut", duration: 0.5 }}
          >
            <img
             className="pointer-events-none"
              src={project.img}
              alt={project.title}
              style={{ width: "100px", height: "100px", marginBottom: "10px" }}
            />
            <h3 className="text-white text-xl">{project.title}</h3>
            <p className="text-gray-400">{project.level}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};


export default Projects;