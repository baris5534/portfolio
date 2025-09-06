import { useRef, useState, useEffect, useCallback } from 'react';

export function useSlider() {
  const sliderRef = useRef(null);
  const [dragLimits, setDragLimits] = useState({ left: 0, right: 0 });

  const calculateDragLimits = useCallback(() => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.scrollWidth;
      const containerWidth = sliderRef.current.offsetWidth;
      
      setDragLimits({
        left: -(sliderWidth - containerWidth),
        right: 0
      });
    }
  }, []);

  useEffect(() => {
    calculateDragLimits();
    
    const resizeObserver = new ResizeObserver(calculateDragLimits);
    if (sliderRef.current) {
      resizeObserver.observe(sliderRef.current);
    }

    window.addEventListener("resize", calculateDragLimits);

    return () => {
      window.removeEventListener("resize", calculateDragLimits);
      resizeObserver.disconnect();
    };
  }, [calculateDragLimits]);

  return { sliderRef, dragLimits };
} 