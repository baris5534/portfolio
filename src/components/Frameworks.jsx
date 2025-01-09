import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
// import html from "../assets/html.png";
// import css from "../assets/css.png";
// import js from "../assets/js.png";
import reactimg from "../assets/react.svg";
import tailwind from "../assets/Tailwindcss.png";
import framer from "../assets/framer-motion-seeklogo.svg";

const CardSlider = () => {
  const cards = [
    // { id: 1, title: "Html", img: html, level: "Profesyonel" },
    // { id: 2, title: "Css", img: css, level: "Profesyonel" },
    // { id: 3, title: "Javascript", img: js, level: "Orta" },
    { id: 4, title: "Reactjs", img: reactimg, level: "Başlangıç" },
    { id: 5, title: "Tailwindcss", img: tailwind, level: "Profesyonel" },
    { id: 6, title: "Framer Motion", img: framer, level: "Başlangıç" },
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
    className=""
      style={{
        overflow: "hidden",
        width: "100%",
        padding: "20px 0",
      }}
    >
      <h2 className="text-white text-2xl mb-5 px-10 max-sm:px-5 max-[380px]:px-10">Frameworkler</h2>
      <motion.div
      className="px-10 max-sm:px-5 max-[380px]:px-10"
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
        {cards.map((card) => (
          <motion.div 
            key={card.id}
            className="bg-gradient-to-r from-gray-800 text-center to-gray-900 p-4 rounded-lg shadow-md"
            // className="bg-gradient-to-br from-[#000046] to-[#1cb5e0] p-4 rounded-lg shadow-md"
            style={{
              minWidth: "200px",
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
              scale: 1,
              opacity: 1,
            }}
            whileHover={{
              scale: 1.05,
            }}
            transition={{ type: "easeInOut", duration: 0.5 }}
          >
            <img
            className="pointer-events-none"
              src={card.img}
              alt={card.title}
              style={{ width: "100px", height: "100px", marginBottom: "10px" }}
            />
            <h3 className="text-white text-xl">{card.title}</h3>
            <p className="text-gray-400">{card.level}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CardSlider;
