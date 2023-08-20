import React, { useState, useEffect } from "react";

function ProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const calculateScrollPercentage = () => {
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const percentage = (scrolled / scrollHeight) * 100;
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollPercentage);
    return () => {
      window.removeEventListener("scroll", calculateScrollPercentage);
    };
  }, []);

  return (
    <div className="progress-bar" style={{ width: `${scrollPercentage}%` }} />
  );
}

export default ProgressBar;
