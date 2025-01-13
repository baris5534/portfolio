import { useRef, useState, useEffect } from 'react';

export function useSlider() {
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

  return { sliderRef, dragLimits };
} 