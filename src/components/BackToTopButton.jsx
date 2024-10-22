import React, { useEffect, useState } from "react";
// import car from "../assets/Images/backToTop-removebg.png";
import car from './images/business.png';
const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false); // State for button click
  const [buttonPosition, setButtonPosition] = useState(4); // Initial bottom position

  const [showSpan, setShowSpan] = useState(false); // State to control span visibility

 

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Show or hide button based on scroll position
      if (scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }

      // Reset button position if not clicked
      if (!isButtonClicked) {
        setButtonPosition(4); // Reset to original position
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isButtonClicked]); // Dependency array includes isButtonClicked

  const handleClick = () => {
    setIsButtonClicked(true); // Set clicked state
    window.scrollTo({ top: 0, behavior: "smooth" });
    setButtonPosition(900);

    // // Reset clicked state after a delay
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 2000); // Adjust this delay as needed
  };

  return (
    <div>
      {backToTopButton && (
        <div
          onClick={handleClick}
          className="text-white text-xl fixed right-4 rounded-xl transition-opacity duration-300 flex items-center z-50 "
          style={{
            bottom: `${isButtonClicked ? buttonPosition : 4}px`, // Adjust bottom position dynamically
            transition: "bottom 1.2s linear", // Smooth transition for position change
          }}
        >
          <div className="relative">
            {showSpan && (
              <>
                <span className="absolute left-[26px] bg-white h-2 w-2 rounded-full  blur-sm text-white brightness-90"></span>
                <span className="absolute right-[27px] bg-white h-2 w-2 rounded-full blur-sm text-white brightness-90"></span>
              </>
            )}
            <img
              src={car}
              alt="back to top"
              className="h-16 z-10"
              title="back to top"
            />
            {/* Right Dot */}
          </div>
        </div>
      )}
    </div>
  );
};

export default BackToTopButton;
