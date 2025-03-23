import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div>Sidebar</div>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
