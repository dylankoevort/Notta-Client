import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "styles/index.css";

if (import.meta.env.DEV && !import.meta.env.PROD) {
  window.envVariables = import.meta.env;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
