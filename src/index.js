import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routeConfig } from "./routes";
import { CoinProvider } from "./context/coins.context";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CoinProvider>
      <RouterProvider router={routeConfig} />
    </CoinProvider>
  </React.StrictMode>
);
