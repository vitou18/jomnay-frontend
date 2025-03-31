import React from "react";
import {
  RiExchangeDollarLine,
  RiHome2Line,
  RiLogoutBoxLine,
  RiWalletLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../../_template/assets/img/small_logo.png";
import useAuth from "../../module/Auth/core/action";

const sidebarItems = [
  { path: "/", name: "Dashboard", icon: <RiHome2Line /> },
  { path: "/income", name: "Income", icon: <RiWalletLine /> },
  { path: "/expense", name: "Expense", icon: <RiExchangeDollarLine /> },
];

const Sidebar = () => {
  const { onLogout } = useAuth();

  return (
    <div className="fixed w-full h-full z-10 bg-[#3A3A3A] py-[80px] flex flex-col justify-between items-center">
      <Link to="/" className="w-[180px]">
        <img className="w-full h-auto" src={logo} alt="logo" />
      </Link>

      <ul className="flex justify-center flex-col">
        {sidebarItems.map((item) => (
          <li key={item.name}>
            <Link to={item.path} className="flex items-center gap-4 text-[#f8f8f8] border-r-2 w-full">
              <span>{item.icon}</span>

              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <button className="" onClick={onLogout}>
        <span>
          <RiLogoutBoxLine />{" "}
        </span>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
