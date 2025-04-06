import React, { useEffect, useState } from "react";
import useLayout from "../core/action";
import { RiMenu2Fill, RiMenuFill } from "react-icons/ri";

const CHeader = ({ title }) => {
  const { onToggleSidebar } = useLayout();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-[#FFF] flex items-center gap-x-[15px] z-40 p-[20px] md:p-[20px] sticky top-0 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_0_16px_-4px_rgba(0,0,0,0.07)]" : ""
      }`}
    >
      <span
        onClick={onToggleSidebar}
        className="cursor-pointer hidden text-[#3A3A3A] p-2 text-[32px] md:block transition-all duration-300 hover:bg-gray-100 rounded-[6px]"
      >
        <RiMenuFill />
      </span>
      <h2 className="text-[18px] text-[#3A3A3A] font-medium md:text-[24px]">
        {title}
      </h2>
    </header>
  );
};

export default CHeader;
