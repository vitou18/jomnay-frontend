import React from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Menu = ({ sidebarItems, onClick }) => {
  return (
    <div className="flex md:flex-col md:justify-between">
      <ul className="flex md:inline md:space-y-6 md:flex-col justify-center items-center gap-[20px]">
        {sidebarItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center w-[40px] h-[40px] rounded-full md:rounded-none md:w-full md:h-max justify-center md:justify-start md:gap-3 md:px-4 md:py-3 md:border-r-[3px] transition ${
                  isActive
                    ? "md:border-r-[#EFBB5E] text-[#FFF] md:bg-transparent bg-[#EFBB5E] md:text-[#EFBB5E]"
                    : "md:border-transparent hover:bg-[#FFF] md:hover:bg-transparent md:hover:text-[#FFF] hover:text-[#3A3A3A] md:hover:border-[#ffffff] text-[#FFFFFF]"
                }`
              }
            >
              <span className="text-[16px] md:text-xl">{item.icon}</span>
              <span className="hidden md:inline">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        onClick={onClick}
        className="ml-[20px] md:mt-[260px] md:ml-0 cursor-pointer hover:bg-[#DC2626] w-[40px] h-[40px] rounded-full md:rounded-none text-[#FFF] hover:text-[#FFF] flex items-center justify-center md:justify-start gap-3 md:hover:text-[#FFF] md:hover:bg-transparent md:px-4 md:py-3 md:w-full transition md:border-r-2 md:border-transparent md:hover:border-[#FFF]"
      >
        <RiLogoutBoxLine className="text-[16px] md:text-xl" />
        <span className="hidden md:inline">Logout</span>
      </button>
    </div>
  );
};

export default Menu;
