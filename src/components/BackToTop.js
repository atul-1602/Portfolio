import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="scroll-btn">
      {backToTop && (
        <button onClick={scrollUp}
          style={{
            position: "fixed",
            bottom: "67px",
            right: "25px",
            height: "40px",
            width: "40px",
            fontSize: "2rem",
            backgroundColor: "#7209b7",
            zIndex:"999",
            border:"2px solid white"
          }}
        >
          ^
        </button>
      )}
    </div>
  );
};

export default BackToTop;
