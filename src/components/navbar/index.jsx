import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";

import { ArrowDown2, Logout as LogoutIcon } from "../../assets/icons";
import Text from "../Text";
import { Divider } from "../divider";

import AccountNav from './navbar.account';
import RenderAuth from './navbar.auth';
import {NavbarContainer} from './navbar.elements'
import MobileNavbar from './navbar.mobile'
import DesktopNavbar from './navbar.desktop'

const Navbar = () => {
  const isBigPhone = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <NavbarContainer
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="wrapper">
        <div className="nav__brand">
          <NavLink activeClassName="active" to="/">
            AlgoSolver
          </NavLink>
        </div>
        {isBigPhone ? (
          <MobileNavbar />
        ) : (
          <DesktopNavbar />
        )}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
