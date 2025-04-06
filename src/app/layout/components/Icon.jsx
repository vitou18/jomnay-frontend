import React from "react";

const Icon = ({ icon: Icon, style }) => {
  if (style === "red") {
    return (
      <div
        className={`w-[45px] md:w-[60px] md:h-[60px] text-[20px] md:text-[24px] rounded-full grid place-items-center h-[45px]
        bg-[#DC2626]/20 text-[#DC2626]
      `}
      >
        <Icon />
      </div>
    );
  }
  if (style === "blue") {
    return (
      <div
        className={`w-[45px] md:w-[60px] md:h-[60px] text-[20px] md:text-[24px] rounded-full grid place-items-center h-[45px]
        bg-[#2563EB]/20 text-[#2563EB]
      `}
      >
        <Icon />
      </div>
    );
  }
  if (style === "green") {
    return (
      <div
        className={`w-[45px] md:w-[60px] md:h-[60px] text-[20px] md:text-[24px] rounded-full grid place-items-center h-[45px]
        bg-[#16A34A]/20 text-[#16A34A]
      `}
      >
        <Icon />
      </div>
    );
  }
};

export default Icon;
