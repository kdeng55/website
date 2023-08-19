// ScrollEffect.js
import { useEffect, useRef } from "react";

const useScrollFadeIn = () => {
  const ref = useRef(null);

  const handleIntersect = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-visible");
    } else {
      entry.target.classList.remove("fade-in-visible");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "0px",
      threshold: 0.5,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return ref;
};

export default useScrollFadeIn;
