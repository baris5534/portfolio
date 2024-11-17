import { useState } from "react";
import { motion } from "framer-motion";

const CardSlider = () => {
  const cards = [
    { id: 1, title: "Html", img:"src/assets/html.png", level:"Profesyonel" },
    { id: 2, title: "Css", img:"/src/assets/css.png", level:"Profesyonel" },
    { id: 3, title: "Javascript", img:"/src/assets/js.png", level:"Orta" },
    { id: 4, title: "Reactjs", img:"/src/assets/react.svg", level:"Başlangıç" },
    { id: 5, title: "Tailwindcss", img:"/src/assets/tailwindcss.png", level:"Profesyonel" },
    { id: 6, title: "Framer Motion", img:"/src/assets/framer-motion-seeklogo.svg", level:"Başlangıç" },
  ];

  const [activeCard] = useState(null); // Hangi kartın büyüyeceğini tutar

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        overflow: "hidden",
        padding: "20px 0",
      }}
    >
      <span className="w-5/6 text-white text-2xl py-5 text-left">Frameworkler</span>
      {/* Sürüklenebilir Alan */}
      <motion.div
        drag="x"
        dragConstraints={{ left: -250, right: 0 }} // Sürükleme sınırları
        style={{
          display: "flex",
          gap: "16px",
          cursor: "grab",
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        {cards.map((card, index) => (
          <motion.div
          className="border-2 space-y-2 border-gray-700 bg-gradient-to-r from-slate-900 to-slate-700 flex pointer-events-none flex-col shadow-white shadow-2xl"
            key={card.id}
            //onClick={() => setActiveCard(index)} // Tıklanan kartı setActiveCard ile ayarla
            style={{
              width: activeCard === index ? "240px" : "200px",
              height: activeCard === index ? "320px" : "300px",
              
              borderRadius: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease",
              flexShrink: 0, // Kartların genişliklerini korumasını sağlar
            }}
            whileHover={{
              scale: activeCard === index ? 1 : 1.05, // Büyüyen kart hover'da büyümesin
              
            }}
          >
            <img src={card.img} alt="logo" className="size-24" />
            <h3 className="text-white text-2xl text-center">{card.title}</h3>
            <span className="text-slate-400">{card.level}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Kart Seçim Durumu 
      <div style={{ marginTop: "20px", display: "flex", gap: "8px" }}>
        {cards.map((card, index) => (
          <button
            key={card.id}
            onClick={() => setActiveCard(index)}
            style={{
              width: activeCard === index ? "16px" : "12px",
              height: activeCard === index ? "16px" : "12px",
              backgroundColor: activeCard === index ? "#007BFF" : "lightgray",
              border: "none",
              borderRadius: "50%",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          ></button>
        ))}
      </div>*/}
    </div>
  );
};

export default CardSlider;
