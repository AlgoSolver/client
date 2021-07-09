import { useMediaQuery } from "react-responsive";
import { NavLink , useLocation} from "react-router-dom";

import {NavbarContainer} from './navbar.elements'
import MobileNavbar from './navbar.mobile'
import DesktopNavbar from './navbar.desktop'
import AccountsNav from './navbar.account'
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

const RenderNav = ()=>{
  const location = useLocation();
  if(location.pathname === "/") return null
  if(location.pathname?.includes("accounts")) return <AccountsNav />
  return <Navbar />
}
export default RenderNav;
