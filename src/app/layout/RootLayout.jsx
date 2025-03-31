import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const RootLayout = () => {

  return (
    <div className="font-popins">
      <Sidebar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
