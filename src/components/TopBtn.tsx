import { ChevronDoubleUpIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";

function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-btn">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 max-sm:bottom-16 right-5 bg-primary p-2 rounded-full duration-300"
        >
          <ChevronDoubleUpIcon className="w-5 text-white" />
        </button>
      )}
    </div>
  );
}

export default ScrollButton;
