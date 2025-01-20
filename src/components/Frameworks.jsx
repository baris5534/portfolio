import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
// import html from "/html.png";
// import css from "/css.png";
// import js from "/js.png";
import reactimg from "/react.svg";
import tailwind from "/Tailwindcss.png";
import framer from "/framer-motion-seeklogo.svg";
import { useSlider } from "../hooks/useSlider";

const CardSlider = () => {
  // Level badge renklerini belirleyelim
  const getLevelStyle = (level) => {
    switch(level) {
      case "Başlangıç":
        return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
      case "Orta":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "Profesyonel":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      default:
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    }
  };

  const cards = [
    // Örnek kartlar
    { id: 4, title: "Reactjs", img: reactimg, level: "Başlangıç" }, // -> Mavi/İndigo renk
    { id: 5, title: "Tailwindcss", img: tailwind, level: "Profesyonel" }, // -> Yeşil renk
    { id: 6, title: "Framer Motion", img: framer, level: "Başlangıç" }, // -> Mavi/İndigo renk
    // Yeni ekleyeceğiniz kartlar için örnek:
    // { id: 7, title: "JavaScript", img: jsimg, level: "Orta" }, // -> Turuncu/Amber renk
  ];

  const { sliderRef, dragLimits } = useSlider();

  return (
    <div className="w-full overflow-hidden py-10">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 px-10 max-sm:px-5 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Kullandığım Teknolojiler
        </h2>
        
        <motion.div
          ref={sliderRef}
          drag="x"
          dragConstraints={dragLimits}
          className="flex gap-6 px-10 max-sm:px-5 cursor-grab active:cursor-grabbing"
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        >
          {cards.map((card) => (
            <motion.div 
              key={card.id}
              className="relative bg-gradient-to-b from-gray-900 to-gray-800 
                         border border-gray-800 rounded-2xl overflow-hidden
                         shadow-xl backdrop-blur-sm
                         hover:border-gray-700 transition-all duration-300"
              style={{
                minWidth: "200px",
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
              <div className="w-full pt-8 px-6">
                <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2">
                  <div className={`px-3 py-1 rounded-b-lg border 
                                 ${getLevelStyle(card.level)}
                                 text-xs font-medium tracking-wider uppercase`}>
                    {card.level}
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-4 mt-4">
                  <div className="p-4 select-none pointer-events-none rounded-xl bg-gradient-to-b from-gray-800 to-gray-900
                                border border-gray-700/50 shadow-inner">
                    <img
                      className="w-16 h-16 object-contain drop-shadow-2xl filter brightness-110"
                      src={card.img}
                      alt={card.title}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                </div>
              </div>

              <div className="w-full p-6 bg-gray-900/50 border-t border-gray-800">
                <div className="flex flex-col items-center space-y-3">
                  <div className={`h-0.5 w-16 rounded-full 
                                 ${card.level === "Profesyonel" ? "bg-gradient-to-r from-emerald-500 to-green-500" :
                                   card.level === "Orta" ? "bg-gradient-to-r from-amber-500 to-orange-500" :
                                   "bg-gradient-to-r from-indigo-500 to-blue-500"} 
                                 opacity-50`}>
                  </div>
                  <p className="text-sm text-center text-gray-400">
                    {card.level === "Başlangıç" ? "Öğrenme Aşamasında" : 
                     card.level === "Orta" ? "Aktif Kullanıyorum" : 
                     "Uzman Seviye"}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CardSlider;
