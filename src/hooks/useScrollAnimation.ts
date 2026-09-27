// hooks/useScrollAnimation.ts

import { useEffect, useRef } from "react";

function useScrollAnimation() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    const elements = container.querySelectorAll(".animate");

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return containerRef;
}

export default useScrollAnimation;
