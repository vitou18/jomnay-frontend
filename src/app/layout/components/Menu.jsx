import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ sidebarItems }) => {
  return (
    <ul className="flex md:flex-col gap-x-[20px] md:gap-y-[20px] md:justify-between">
      {sidebarItems.map((item) => (
        <li key={item.name}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `flex items-center w-[45px] h-[45px] rounded-full md:rounded-none md:w-full md:h-max justify-center md:justify-start md:gap-[15px] md:px-4 md:py-3 md:border-r-[3px] transition ${
                isActive
                  ? "md:border-r-[#EFBB5E] text-[#FFF] md:bg-transparent bg-[#EFBB5E] md:text-[#EFBB5E]"
                  : "md:border-transparent hover:bg-[#FFF] md:hover:bg-transparent md:hover:text-[#FFF] hover:text-[#3A3A3A] md:hover:border-[#ffffff] text-[#FFFFFF]"
              }`
            }
          >
            <span className="text-[20px] md:text-[24px]">{item.icon}</span>
            <span className="hidden md:inline">{item.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
