import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./_template/assets/css/index.css";
import AppRoute from "./app/routes/AppRoute.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoute />
  </StrictMode>
);
