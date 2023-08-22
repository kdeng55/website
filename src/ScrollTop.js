import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Customize the scroll behavior here
    const scrollOptions = {
      top: 100, // Scroll to a specific pixel position from the top
      left: 0,
      behavior: "smooth", // Use smooth scrolling
    };
    window.scrollTo(scrollOptions);
  }, [location]);

  return null;
}

export default ScrollToTop;
