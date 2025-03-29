import React from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../module/Auth/core/action";

const RootLayout = () => {
  const { onLogout } = useAuth();

  return (
    <>
      <div>Sidebar</div>

      <button onClick={onLogout}>Logout</button>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
