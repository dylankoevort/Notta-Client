import React from "react";
import ReactDOM from "react-dom/client";
import "styles/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import envVariables from "configs/envVariables";

if (import.meta.env.DEV && !import.meta.env.PROD) {
  window.envVariables = envVariables;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
