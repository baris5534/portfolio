import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import code from "/code.png";
import nenedir from "/favicon.svg";
import calculator from "/calculatorDark.png";

const projects = [
  {
    id: 1,
    title: "Ne Nedir Blog",
    img: nenedir,
    description: "Yazılım dilleri ve Frameworkler hakkında bilgi veriyorum.",
    projectUrl: "https://ne-nedir.netlify.app",
    status: "Tamamlandı",
    color: "from-green-400 via-blue-500 to-purple-500",
  },
  {
    id: 2,
    title: "Hesap Makinesi",
    img: calculator,
    description: "Vue ile yapılmış basit bir hesap makinesi.",
    projectUrl: "https://calculatorapp-zeta.vercel.app",
    status: "Tamamlandı",
    color: "from-yellow-400 via-pink-500 to-red-500",
  },
  {
    id: 3,
    title: "Proje ismi",
    img: code,
    description: "Projelerim için beklemede kalın.",
    projectUrl: "https://github.com/username/project",
    status: "Yakında",
    color: "from-cyan-400 via-blue-500 to-indigo-500",
  },
  {
    id: 4,
    title: "Proje ismi",
    img: code,
    description: "Projelerim için beklemede kalın.",
    projectUrl: "https://github.com/username/project",
    status: "Yakında",
    color: "from-cyan-400 via-blue-500 to-indigo-500",
  },
  {
    id: 5,
    title: "Proje ismi",
    img: code,
    description: "Projelerim için beklemede kalın.",
    projectUrl: "https://github.com/username/project",
    status: "Yakında",
    color: "from-cyan-400 via-blue-500 to-indigo-500",
  },
  {
    id: 6,
    title: "Proje ismi",
    img: code,
    description: "Projelerim için beklemede kalın.",
    projectUrl: "https://github.com/username/project",
    status: "Yakında",
    color: "from-cyan-400 via-blue-500 to-indigo-500",
  },
];

const statusColors = {
  Tamamlandı: "bg-green-500 text-white",
  Yakında: "bg-gray-400 text-white",
  "Devam Ediyor": "bg-yellow-400 text-black",
};

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const mouseStartX = useRef(null);
  const mouseEndX = useRef(null);
  const isDragging = useRef(false);
  const carouselRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const gap = 24; // gap-6 in px (6*4=24)

  // Dynamically calculate visibleCards based on container width
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    function updateDimensions() {
      if (!carouselRef.current) return;
      const containerW = carouselRef.current.offsetWidth;
      setContainerWidth(containerW);
      const cardElement = carouselRef.current.querySelector(".carousel-card");
      if (cardElement) {
        const style = window.getComputedStyle(cardElement);
        const width = cardElement.offsetWidth;
        const marginRight = parseInt(style.marginRight) || 0;
        setCardWidth(width + gap);
      }
      // Calculate visibleCards dynamically based on containerW and card width + gap
      if (cardWidth > 0) {
        const visible = Math.floor(containerW / (cardWidth));
        setVisibleCards(visible > 0 ? visible : 1);
      }
    }
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [cardWidth]);

  // Introduce maxCurrentIndex for carousel sliding limits
  const maxCurrentIndex = Math.max(projects.length - visibleCards, 0);

  // Clamp current between 0 and maxCurrentIndex
  const safeCurrent = Math.min(Math.max(current, 0), maxCurrentIndex);

  // Touch event handlers
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const delta = touchEndX.current - touchStartX.current;
      if (Math.abs(delta) > 50) {
        if (delta < 0 && safeCurrent < maxCurrentIndex) {
          setCurrent(safeCurrent + 1);
        } else if (delta > 0 && safeCurrent > 0) {
          setCurrent(safeCurrent - 1);
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Mouse drag handlers
  const onMouseDown = (e) => {
    isDragging.current = true;
    mouseStartX.current = e.clientX;
  };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    mouseEndX.current = e.clientX;
  };
  const onMouseUp = () => {
    if (!isDragging.current) return;
    if (mouseStartX.current !== null && mouseEndX.current !== null) {
      const delta = mouseEndX.current - mouseStartX.current;
      if (Math.abs(delta) > 50) {
        if (delta < 0 && safeCurrent < maxCurrentIndex) {
          setCurrent(safeCurrent + 1);
        } else if (delta > 0 && safeCurrent > 0) {
          setCurrent(safeCurrent - 1);
        }
      }
    }
    isDragging.current = false;
    mouseStartX.current = null;
    mouseEndX.current = null;
  };

  // Calculate translateX offset in px to center active card with partial previews
  const rawOffset = safeCurrent * cardWidth;
  const offset = Math.min(
    Math.max(rawOffset - (containerWidth - (cardWidth - gap)) / 2, 0),
    Math.max(projects.length * cardWidth - containerWidth, 0)
  );

  // Calculate dots count based on maxCurrentIndex
  // Add an extra dot for large screens (desktop)
  let dotsCount = maxCurrentIndex + 1;
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  );
  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1024);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (isDesktop) {
    dotsCount += 1;
  }

  return (
    <div className="w-full py-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">
        Projelerim
      </h2>
      <div className="w-full max-w-6xl">
        <div
          className="relative overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          ref={carouselRef}
          style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
        >
          <div
            className="flex justify-start gap-6"
            style={{
              transform: `translateX(-${offset}px)`,
              transition: "transform 0.5s ease-in-out",
            }}
            ref={cardsContainerRef}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className={`carousel-card flex-shrink-0 w-[280px] md:w-[320px] lg:w-[360px] h-96 rounded-3xl shadow-2xl overflow-hidden border-2 border-transparent hover:border-white transition-all duration-300 bg-gradient-to-br ${project.color} flex flex-col items-center justify-center`}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div
                  className={`absolute top-5 right-5 px-4 py-1 rounded-full shadow-lg text-xs font-bold ${
                    statusColors[project.status] || "bg-blue-500 text-white"
                  }`}
                >
                  {project.status}
                </div>
                <div className="flex flex-col items-center justify-center h-full px-8 pt-12 pb-8">
                  <motion.div
                    className="w-20 h-20 rounded-xl shadow-xl bg-white/80 flex items-center justify-center mb-6 border-4 border-white group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 12 }}
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-14 h-14 object-contain select-none"
                    />
                  </motion.div>
                  <h3 className="text-2xl font-bold select-none text-white mb-2 text-center drop-shadow">
                    {project.title}
                  </h3>
                  <p className="text-base select-none text-white/80 text-center mb-6">
                    {project.description}
                  </p>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex select-none items-center gap-2 px-6 py-2 rounded-full font-semibold bg-white text-gray-900 shadow-lg hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 hover:text-white transition-all duration-300"
                  >
                    Projeyi İncele
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.15 }}
                  style={{
                    background: "linear-gradient(120deg, #fff 0%, #fff 100%)",
                    mixBlendMode: "overlay",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: dotsCount }).map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === idx
                  ? "bg-gradient-to-r from-purple-400 to-blue-400 scale-125"
                  : "bg-gray-500 opacity-60"
              }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
