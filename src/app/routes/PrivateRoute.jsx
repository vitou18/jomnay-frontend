import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../module/Dashboard/Dashboard";
import Income from "../module/Income/Income";
import Expense from "../module/Expense/Expense";
import RootLayout from "../layout/RootLayout";

const PrivateRoute = () => {
  const accessToken = false;

  if (!accessToken) return <Navigate to="/auth" replace />;

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="expense" element={<Expense />} />
        <Route path="/*" element={<h1>Page not found!!</h1>} />
      </Route>
    </Routes>
  );
};

export default PrivateRoute;
