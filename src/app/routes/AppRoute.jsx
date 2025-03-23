import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Auth from "../module/Auth/Auth";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/*" element={<PrivateRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
