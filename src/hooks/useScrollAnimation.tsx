import { useEffect, useRef, useState } from "react";

// Check if we're on mobile (under 768px)
const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 768;

export const useScrollAnimation = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // On mobile, trigger visibility faster with a lower threshold
    const mobileThreshold = isMobile() ? 0.05 : threshold;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: mobileThreshold,
        // Smaller margin on mobile for snappier response
        rootMargin: isMobile() ? "0px" : "0px 0px -50px 0px"
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
};