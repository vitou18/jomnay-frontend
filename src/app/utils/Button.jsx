import React from "react";

const Button = ({ text, type, style, icon: Icon, onClick }) => {
  if (Icon && text === "Add") {
    return (
      <button
        onClick={onClick}
        className="p-[10px] cursor-pointer flex items-center gap-x-[8px] bg-[#f5f5f5] rounded-lg text-[#33363F] transition-all duration-300 hover:bg-[#16A34A] focus:bg-[#16A34A] hover:text-[#fff] focus:text-[#fff]"
      >
        <span className="text-[18px]">
          <Icon />
        </span>
        <span className="hidden md:inline">{text}</span>
      </button>
    );
  }

  if (Icon && text === "Download Excel") {
    return (
      <button
        onClick={onClick}
        className="p-[10px] cursor-pointer flex items-center gap-x-[8px] bg-[#f5f5f5] rounded-lg text-[#33363F] transition-all duration-300 hover:bg-[#EFBB5E] focus:bg-[#EFBB5E] focus:text-[#fff] hover:text-[#fff]"
      >
        <span className="text-[18px]">
          <Icon />
        </span>
        <span className="hidden md:inline">{text}</span>
      </button>
    );
  }

  if (Icon && type === "delete") {
    return (
      <button
        onClick={onClick}
        className="p-[10px] cursor-pointer flex items-center gap-x-[8px] bg-[#fff] rounded-lg text-[#33363F] transition-all duration-300 hover:bg-[#DC2626] focus:bg-[#DC2626] focus:text-[#fff] hover:text-[#fff]"
      >
        <span className="text-[18px]">
          <Icon />
        </span>
      </button>
    );
  }

  if (Icon && type === "edit") {
    return (
      <button
        onClick={onClick}
        className="p-[10px] cursor-pointer flex items-center gap-x-[8px] bg-[#fff] rounded-lg text-[#33363F] transition-all duration-300 hover:bg-[#2563EB] hover:text-[#fff]"
      >
        <span className="text-[18px]">
          <Icon />
        </span>
      </button>
    );
  }

  if (text === "Back") {
    return (
      <button
        onClick={onClick}
        className="px-[15px] text-[12px] md:text-[14px] h-[36px] cursor-pointer bg-[#DC2626] rounded-lg text-[#fff] transition-all duration-300 hover:bg-[#CA2424] focus:bg-[#CA2424]"
      >
        <span>{text}</span>
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
