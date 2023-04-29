import { createBrowserRouter } from "react-router-dom";
import { AboutPage, EarnPage, SupportPage, TradePage } from "../pages";
import { App } from "../App";
import { ROUTE_PATHS } from "../utils/constants";

export const routeConfig = createBrowserRouter([
  {
    path: ROUTE_PATHS.root,
    element: <App />,
    children: [
      {
        path: ROUTE_PATHS.root,
        element: <TradePage />,
      },
      {
        path: ROUTE_PATHS.earn,
        element: <EarnPage />,
      },
      {
        path: ROUTE_PATHS.support,
        element: <SupportPage />,
      },
      {
        path: ROUTE_PATHS.about,
        element: <AboutPage />,
      },
    ],
  },
]);
