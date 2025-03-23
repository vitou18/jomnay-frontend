import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const PrivateRoute = () => {
  const accessToken = false;

  if (!accessToken) return <Navigate to="/auth" replace />;

  return (
    <Routes>
      <Route path="/" element={<h1>Root</h1>}>
        <Route index element={<h1>Dashboard</h1>} />
        <Route path="income" element={<h1>Income</h1>} />
        <Route path="expense" element={<h1>Expense</h1>} />
      </Route>
    </Routes>
  );
};

export default PrivateRoute;
