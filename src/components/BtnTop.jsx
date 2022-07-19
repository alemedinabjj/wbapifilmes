import { BsArrowUpCircle } from "react-icons/bs";
import { useState, useEffect } from "react";
export function BtnTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function handleScroll() {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible ? (
        <BsArrowUpCircle
          size={30}
          className="text-white fixed bottom-1 transition-all right-2 animate-bounce"
          onClick={backToTop}
        />
      ) : (
        <BsArrowUpCircle
          size={30}
          className="text-white fixed bottom-1 transition-all hidden right-2 animate-bounce"
          onClick={backToTop}
        />
      )}
    </>
  );
}
