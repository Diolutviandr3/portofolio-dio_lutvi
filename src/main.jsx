import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouterRouter } from "react-router-dom"; // PASTIKAN INI
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* TANPA basename untuk development */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);