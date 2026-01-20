import { useMemo } from "react";
import reactimg from "/react.svg";
import tailwind from "/Tailwindcss.png";
import framer from "/framer.svg";
import excel from "/excel.svg";
import figma from "/figma-icon.svg";
import framerps from "/framerps.svg";
import nextjs from "/nextjs.svg";

export default function Frameworks() {
  const getLevelStyle = useMemo(
    () => (level) => {
      switch (level) {
        case "Başlangıç":
          return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
        case "Orta":
          return "bg-amber-500/10 text-amber-400 border-amber-500/20";
        case "Profesyonel":
          return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
        default:
          return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      }
    },
    [],
  );

  const cards = useMemo(
    () => [
      { id: 3, title: "Excel", img: excel, level: "Başlangıç" },
      { id: 4, title: "Reactjs", img: reactimg, level: "Başlangıç" },
      { id: 5, title: "Tailwindcss", img: tailwind, level: "Orta" },
      { id: 6, title: "Framer Motion", img: framer, level: "Başlangıç" },
      { id: 8, title: "Figma", img: figma, level: "Başlangıç" },
      { id: 2, title: "Framer", img: framerps, level: "Başlangıç" },
      { id: 1, title: "Nextjs", img: nextjs, level: "Başlangıç" },
    ],
    [],
  );

  return (
    <div className="w-full py-5 max-lg:mt-20 max-sm:mt-10 sm:mt-0">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 px-10 max-sm:px-5 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Kullandığım Teknolojiler
        </h2>

        <div className="flex flex-wrap gap-6 px-10 max-sm:px-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className=" bg-white/10 backdrop-blur-lg pb-2
                           border border-white/20 rounded-2xl
                           shadow-xl max-sm:w-full w-[280px]
                           hover:border-white/30 transition-all duration-300"
            >
              <div className=" pt-8 px-6">
                <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2">
                  <div
                    className={`px-3 py-1 rounded-b-lg border 
                                 ${getLevelStyle(card.level)}
                                 text-xs w-full font-medium text-center pt-2 tracking-wider uppercase`}
                  >
                    {card.level}
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-4 mt-4">
                  <div
                    className="p-3 select-none pointer-events-none bg-transparent drop-shadow-2xl
                                border border-gray-700/50 shadow-inner rounded-xl"
                  >
                    <img
                      className="max-w-16 max-h-16 size-14 object-contain drop-shadow-2xl filter brightness-110"
                      src={card.img}
                      alt={card.title}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white text-center">
                    {card.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
