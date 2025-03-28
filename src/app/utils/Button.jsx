import React from "react";

const Button = ({ text, type, style }) => {
  if (style === "second") {
    return (
      <button
        className="transition duration-300 w-full hover:bg-[#E5B35A] mt-[20px] lg:mt-[30px] bg-[#EFBB5E] rounded-lg text-[#fff] p-[10px] cursor-pointer text-[18px] font-medium"
        type={type}
      >
        {text}
      </button>
    );
  }

  return (
    <button
      className="transition duration-300 w-full hover:bg-[#E5B35A] mt-[20px] lg:mt-[30px] bg-[#EFBB5E] rounded-lg text-[#fff] p-[10px] cursor-pointer text-[16px] font-medium"
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
