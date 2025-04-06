import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import logo from "../../_template/assets/img/small_logo.png";
import useAuth from "../module/Auth/core/action";
import Loader from "./components/Loader";
import {
  RiExchangeDollarLine,
  RiHome2Line,
  RiWalletLine,
} from "react-icons/ri";
import useLayout from "./core/action";

const sidebarItems = [
  { path: "/", name: "Dashboard", icon: <RiHome2Line /> },
  { path: "/income", name: "Income", icon: <RiWalletLine /> },
  { path: "/expense", name: "Expense", icon: <RiExchangeDollarLine /> },
];

const RootLayout = () => {
  const { onLogout } = useAuth();
  const { sideBarShow } = useLayout();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="font-popins">
      <Sidebar
        sideBarShow={sideBarShow}
        logo={logo}
        onLogout={onLogout}
        sidebarItems={sidebarItems}
      />

      <div
        className={`transition-all relative duration-300 ${
          sideBarShow ? "md:ml-0" : "md:ml-[260px]"
        }`}
      >
        {loading && <Loader />}
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
