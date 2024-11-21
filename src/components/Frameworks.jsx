import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const CardSlider = () => {
  const cards = [
    { id: 1, title: "Html", img: "src/assets/html.png", level: "Profesyonel" },
    { id: 2, title: "Css", img: "/src/assets/css.png", level: "Profesyonel" },
    { id: 3, title: "Javascript", img: "/src/assets/js.png", level: "Orta" },
    { id: 4, title: "Reactjs", img: "/src/assets/react.svg", level: "Başlangıç" },
    { id: 5, title: "Tailwindcss", img: "/src/assets/tailwindcss.png", level: "Profesyonel" },
    { id: 6, title: "Framer Motion", img: "/src/assets/framer-motion-seeklogo.svg", level: "Başlangıç" },
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
            className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg shadow-md"
            style={{
              minWidth: "200px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
            whileHover={{
              scale: 1.05,
            }}
            transition={{ type: "spring", stiffness: 300 }}
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
