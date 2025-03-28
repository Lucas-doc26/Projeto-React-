import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Crud from "./crud";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
