import { Outlet } from "react-router-dom";
import { NavBar } from "./components/common";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
