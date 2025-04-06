import React from "react";
import { RiLogoutBoxLine } from "react-icons/ri";

const Logout = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer md:mt-auto hover:bg-[#DC2626] w-[45px] h-[45px] rounded-full md:rounded-none text-[#FFF] hover:text-[#FFF] flex items-center justify-center md:justify-start gap-3 md:hover:text-[#FFF] md:hover:bg-transparent md:px-4 md:py-3 md:w-full transition md:border-r-2 md:border-transparent md:hover:border-[#FFF]"
    >
      <RiLogoutBoxLine className="text-[16px] md:text-xl" />
      <span className="hidden md:inline">Logout</span>
    </button>
  );
};

export default Logout;
