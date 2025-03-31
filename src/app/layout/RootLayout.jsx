import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import logo from "../../_template/assets/img/small_logo.png";
import useAuth from "../module/Auth/core/action";
import { RiExchangeDollarLine, RiHome2Line, RiWalletLine } from "react-icons/ri";

const sidebarItems = [
  { path: "/", name: "Dashboard", icon: <RiHome2Line /> },
  { path: "/income", name: "Income", icon: <RiWalletLine /> },
  { path: "/expense", name: "Expense", icon: <RiExchangeDollarLine /> },
];

const RootLayout = () => {
  const { onLogout } = useAuth();

  return (
    <div className="font-popins">
      <Sidebar logo={logo} onLogout={onLogout} sidebarItems={sidebarItems} />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
