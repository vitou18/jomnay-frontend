import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "../module/Auth/components/Login";
import Register from "../module/Auth/components/Register";
import PrivateRoute from "./PrivateRoute";

const AppRoute = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#3A3A3A] backdrop-blur-md z-50">
          <div className="w-9 h-9 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<PrivateRoute />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
};

export default App;
