import { Outlet } from "react-router-dom";
import { Container, NavBar } from "./components";

export const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
