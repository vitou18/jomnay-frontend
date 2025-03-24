import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./_template/assets/css/index.css";
import AppRoute from "./app/routes/AppRoute.jsx";
import { Provider } from "react-redux";
import store from "./app/redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <AppRoute />
    </StrictMode>
  </Provider>
);
