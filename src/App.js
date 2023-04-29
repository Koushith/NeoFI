import { Outlet } from "react-router-dom";
import { NavBar } from "./components/common";

export const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
