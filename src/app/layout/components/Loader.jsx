import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="relative flex items-center justify-center w-10 h-10 border-[4px] border-[#EFBB5E]/40 rounded-full shadow-md shadow-[#EFBB5E]/20 inset-shadow">
        <span className="absolute w-2 h-2 bg-[#EFBB5E] rounded-full shadow-dot animate-orbit [animation-delay:0.02s]"></span>
        <span className="absolute w-2 h-2 bg-[#EFBB5E] rounded-full shadow-dot animate-orbit [animation-delay:0.04s]"></span>
        <span className="absolute w-2 h-2 bg-[#EFBB5E] rounded-full shadow-dot animate-orbit [animation-delay:0.06s]"></span>
        <span className="absolute w-2 h-2 bg-[#EFBB5E] rounded-full animate-orbit"></span>

        <style>
          {`
          @keyframes orbit {
            from {
              transform: rotate(0deg) translateX(18px) rotate(0deg);
            }
            to {
              transform: rotate(360deg) translateX(18px) rotate(-360deg);
            }
          }
          .animate-orbit {
            animation: orbit 1s linear infinite;
          }
          .shadow-dot {
            box-shadow: 0 0 3px #EFBB5E, 0 0 3px #EFBB5E inset;
          }
          .inset-shadow {
            box-shadow: inset 0 0 3px #EFBB5E;
          }
        `}
        </style>
      </div>
    </div>
  );
};

export default Loader;
