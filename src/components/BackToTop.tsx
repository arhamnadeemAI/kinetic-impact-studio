import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
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
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-medium hover:scale-110 transition-smooth"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 mx-auto" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
