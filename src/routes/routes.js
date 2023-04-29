import { createBrowserRouter } from "react-router-dom";
import { EarnPage, SupportPage, TradePage } from "../pages";

const ROUTE_PATHS = {
  root: "/",
  earn: "/earn",
  support: "/support",
};

export const routeConfig = createBrowserRouter([
  {
    path: ROUTE_PATHS.root,
    element: <TradePage />,
    children: [
      {
        path: ROUTE_PATHS.earn,
        element: <EarnPage />,
      },
      {
        path: ROUTE_PATHS.support,
        element: <SupportPage />,
      },
    ],
  },
]);
