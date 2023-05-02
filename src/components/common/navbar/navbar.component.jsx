import Logo from "../../../assets/logos/neofi-logo.svg";
import { NavigationContainer } from "./navbar.styles";
import { ROUTE_PATHS } from "../../../utils";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <NavigationContainer>
      <div className="wrapper">
        <img src={Logo} alt="NeoFi-logo" className="logo" />
        <nav>
          <ul>
            <NavLink to={ROUTE_PATHS.root}>Trade</NavLink>
            <NavLink to={ROUTE_PATHS.earn}>Earn</NavLink>
            <NavLink to={ROUTE_PATHS.support}>Support</NavLink>
            <NavLink to={ROUTE_PATHS.about}>About</NavLink>
          </ul>
        </nav>
        <div className="mobile-menu">
          {open ? (
            <i
              className="fa-sharp fa-solid fa-xmark"
              onClick={() => setOpen(true)}
            ></i>
          ) : (
            <i className="fa-solid fa-bars" onClick={() => setOpen(true)}></i>
          )}
          {/* <MobileMenu open={open} setOpen={setOpen} /> */}
        </div>
        <button className="connect-btn">Connect Wallet</button>
      </div>
    </NavigationContainer>
  );
};
