import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "../module/Dashboard/Dashboard";
import Income from "../module/Income/Income";
import Expense from "../module/Expense/Expense";
import RootLayout from "../layout/RootLayout";
import useAuth from "../module/Auth/core/action";

const PrivateRoute = () => {
  const { accessToken } = useAuth();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location]);

  if (!accessToken) return <Navigate to="/auth" replace />;

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#3A3A3A] backdrop-blur-md z-50">
          <div className="w-9 h-9 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="expense" element={<Expense />} />
          <Route path="/*" element={<h1>Page not found!!</h1>} />
        </Route>
      </Routes>
    </>
  );
};

export default PrivateRoute;
