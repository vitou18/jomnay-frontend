import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import logo from "../../_template/assets/img/small_logo.png";
import useAuth from "../module/Auth/core/action";
import Loader from "./components/Loader";
import {
  RiBarChart2Line,
  RiExchangeDollarLine,
  RiHome2Line,
  RiWalletLine,
} from "react-icons/ri";
import Button from "../utils/Button";
import Modal from "../utils/Modal";
import Action from "../utils/Action";

const sidebarItems = [
  { path: "/", name: "Dashboard", icon: <RiHome2Line /> },
  { path: "/income", name: "Income", icon: <RiWalletLine /> },
  { path: "/expense", name: "Expense", icon: <RiExchangeDollarLine /> },
  { path: "/report", name: "Report", icon: <RiBarChart2Line /> },
];

const RootLayout = () => {
  const { onLogout } = useAuth();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location]);

  const onClickModal = () => {
    setShow((pre) => !pre);
  };

  const onClickLogout = async () => {
    await onLogout();
    setShow((pre) => !pre);
  };

  return (
    <div className="font-popins">
      <Sidebar
        logo={logo}
        onClickModal={onClickModal}
        sidebarItems={sidebarItems}
      />

      <div className="transition-all relative duration-300 md:ml-[260px]">
        {loading && <Loader />}
        <Outlet />
      </div>

      {show && (
        <Modal
          show={show}
          setShow={setShow}
          title="Logout"
          desc="Are you sure you want to logout?"
        >
          <Action
            cancelText="Cancel"
            submitText="Yes"
            onCancel={() => setShow((pre) => !pre)}
            onSubmit={onClickLogout}
          />
        </Modal>
      )}
    </div>
  );
};

export default RootLayout;
