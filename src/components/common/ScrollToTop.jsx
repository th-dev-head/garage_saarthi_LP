import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-6 z-[99]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#B02E0C] hover:bg-[#B83520] text-white p-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-100 cursor-pointer flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <FaChevronUp className="w-5 h-5 transform transition-transform" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
