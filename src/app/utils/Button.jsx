import React from "react";

const Button = ({ text, type, style, icon: Icon }) => {
  if (Icon && text === "Add") {
    return (
      <button className="p-[10px] cursor-pointer flex items-center gap-x-[8px] bg-[#f8f8f8] rounded-lg text-[#696969] transition-all duration-300 hover:bg-[#16A34A] focus:bg-[#16A34A] hover:text-[#fff] focus:text-[#fff]">
        <span className="text-[18px]">
          <Icon />
        </span>
        <span className="hidden md:inline">{text}</span>
      </button>
    );
  }

  if (Icon && text === "Download") {
    return (
      <button className="p-[10px] cursor-pointer flex items-center gap-x-[8px] bg-[#f8f8f8] rounded-lg text-[#696969] transition-all duration-300 hover:bg-[#EFBB5E] focus:bg-[#EFBB5E] focus:text-[#fff] hover:text-[#fff]">
        <span className="text-[18px]">
          <Icon />
        </span>
        <span className="hidden md:inline">{text}</span>
      </button>
    );
  }

  if (Icon && type === "delete") {
    return (
      <button className="p-[10px] cursor-pointer flex items-center gap-x-[8px] bg-[#f8f8f8] rounded-lg text-[#696969] transition-all duration-300 hover:bg-[#DC2626] focus:bg-[#DC2626] focus:text-[#fff] hover:text-[#fff]">
        <span className="text-[18px]">
          <Icon />
        </span>
      </button>
    );
  }

  if (Icon && type === "edit") {
    return (
      <button className="p-[10px] cursor-pointer flex items-center gap-x-[8px] bg-[#f8f8f8] rounded-lg text-[#696969] transition-all duration-300 hover:bg-[#2563EB] hover:text-[#fff]">
        <span className="text-[18px]">
          <Icon />
        </span>
      </button>
    );
  }

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
