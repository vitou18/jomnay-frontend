import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../module/Dashboard/Dashboard";
import Income from "../module/Income/Income";
import AddIncome from "../module/Income/components/AddIncome";
import Expense from "../module/Expense/Expense";
import RootLayout from "../layout/RootLayout";
import useAuth from "../module/Auth/core/action";
import EditIncome from "../module/Income/components/EditIncome";

const PrivateRoute = () => {
  const { accessToken } = useAuth();

  if (!accessToken) return <Navigate to="/login" replace />;

  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="income/add" element={<AddIncome />} />
          <Route path="income/edit/:id" element={<EditIncome />} />
          <Route path="expense" element={<Expense />} />
          <Route path="/*" element={<h1>Page not found!!</h1>} />
        </Route>
      </Routes>
    </>
  );
};

export default PrivateRoute;
