import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "../button/";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Messgae from "../../components/message/";
import { useAuth, useLogout } from "../../hooks/user";
const AccountNavContainer = styled(motion.nav)`
  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    height: 6.4rem;
  }
  .nav__brand {
    color: ${({ theme }) => theme.colors.primary[0]};
    font-size: 3.6rem;
    font-family: "Avenir-bold";
  }
`;

const Logout = () => {
  const { isLoading, isError, error, mutate } = useLogout();
  const logout = () => {
    mutate();
  };
  return (
    <>
      {isError && (
        <Messgae
          type="red"
          hooked={true}
          closeble={true}
          subTitle={error.message}
        />
      )}
      <Button loading={isLoading} onClick={logout}>
        Logout
      </Button>
    </>
  );
};
const RenderAuth = ({ menu = "menu", close = () => {} }) => {
  const { data } = useAuth(false);
  if (data?.username) {
    return (
      <>
        {" "}
        <li className={`${menu}__item`}>
          <NavLink activeClassName="active" onClick={close} to="/profile" className={`${menu}__link`}>
            {data.username}
          </NavLink>
        </li>
        <li className={`${menu}__item`}>
          <Logout />
        </li>
      </>
    );
  }
  if (menu === "nav")
    return (
      <>
        <li className="nav__item">
          <NavLink activeClassName="active" onClick={close} to="/accounts/login" className="nav__link">
            Login
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink activeClassName="active" onClick={close} to="/accounts/signup">
            <Button
              big
              circle
              style={{
                height: " 4.8rem",
                padding: "0 2.4rem",
                marginLeft: "2rem",
              }}
              theme="primary"
            >
              Signup
            </Button>
          </NavLink>
        </li>
      </>
    );
  else
    return (
      <>
        <li className="menu__item">
          <NavLink activeClassName="active" onClick={close} to="/accounts/login" className="menu__link">
            login
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink activeClassName="active" onClick={close} to="/accounts/signup" className="menu__link">
            signup
          </NavLink>
        </li>
      </>
    );
};
const NavbarContainer = styled(motion.nav)`
  background: ${({ theme }) => theme.colors.light[4]};
  box-shadow: ${({ theme }) => theme.elevation[8].shadow};
  .wrapper {
    display: flex;
    align-items: center;
    padding: 0 2rem;
    height: 6.4rem;
  }
  .nav {
    &__brand {
      margin-right: 4rem;
      font-size: 3rem;
      font-family: "Linotte-bold";
      color: ${({ theme }) => theme.colors.dark[0]};
    }
    &__links {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
    }
    &__list {
      list-style-type: none;
      display: flex;
      align-items: center;
      height: 100%;
      &.list1 {
        flex: 1;
        justify-content: flex-start;
      }
    }
    &__item{
      height: 100%;
      display: flex;
      align-items: center;
    }
    &__item:not(:last-child) {
      margin-right: 1rem;
    }
    &__link {
      padding: 1rem 1rem;
      font-size: 1.6rem;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.dark[2]};
      transition: background 0.2s ease, color 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      position: relative;
      &::before{
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 0;
        background: ${({ theme }) => theme.colors.primary[0]};;
        border-radius: .3rem .3rem 0 0;
        -webkit-transition: height .25s;
        -o-transition: height .25s;
        transition: height .25s;
      }
      &.active{
        color: ${({ theme }) => theme.colors.dark[0]};
        &::before {
              height: .3rem;
          }
      }
      &:hover {
        color: ${({ theme }) => theme.colors.dark[0]};
      }
    }
  }
  .menu {
    flex: 1;
    justify-content: flex-end;
    display: flex;
    .landing {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.3);
      height: 100vh;
      z-index: 5;
    }
    &__container {
      width: 70vw;
      backdrop-filter: blur(15px) saturate(180%);
      background: rgba(40, 44, 71, 0.76);
    }
    &__body {
      min-height: 100vh;
      overflow-y: auto;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
    &__list {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 2rem;
      list-style-type: none;
    }
    &__item:not(:last-child) {
      margin-bottom: 1rem;
    }
    &__link {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.light[4]};
      text-transform: capitalize;
      padding: 1rem 1rem 1rem 2rem;
      width: 100%;
      display: inline-block;
      border-radius: 1rem;
      transition: background 0.2s ease, color 0.2s ease;
      &:hover {
        background: ${({ theme }) => theme.colors.light[4]};
        color: ${({ theme }) => theme.colors.dark[0]};
      }
    }
    &__icon {
      .nav-icon-5 {
        z-index: 20;
        width: 35px;
        height: 30px;
        margin: 10px 10px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }

      .nav-icon-5 span {
        background-color: ${({ theme }) => theme.colors.dark[0]};
        position: absolute;
        border-radius: 2px;
        transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
        width: 100%;
        height: 4px;
        transition-duration: 500ms;
      }
      .nav-icon-5 span:nth-child(1) {
        top: 0px;
        left: 0px;
      }
      .nav-icon-5 span:nth-child(2) {
        top: 13px;
        left: 0px;
        opacity: 1;
      }
      .nav-icon-5 span:nth-child(3) {
        bottom: 0px;
        left: 0px;
      }
      .nav-icon-5:not(.open):hover span:nth-child(1) {
        transform: rotate(-3deg) scaleY(1.1);
      }
      .nav-icon-5:not(.open):hover span:nth-child(2) {
        transform: rotate(3deg) scaleY(1.1);
      }
      .nav-icon-5:not(.open):hover span:nth-child(3) {
        transform: rotate(-4deg) scaleY(1.1);
      }
      .nav-icon-5.open span:nth-child(1) {
        transform: rotate(45deg);
        top: 13px;
      }
      .nav-icon-5.open span:nth-child(2) {
        opacity: 0;
      }
      .nav-icon-5.open span:nth-child(3) {
        transform: rotate(-45deg);
        top: 13px;
      }
    }
  }
`;

export const AccountsNav = () => {
  return (
    <AccountNavContainer>
      <div className="wrapper">
        <div>
          <NavLink activeClassName="active" className="nav__brand" to="/">
            AlgoSolver
          </NavLink>
        </div>
      </div>
    </AccountNavContainer>
  );
};
const Navbar = ({ close }) => {
  const isBigPhone = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <NavbarContainer
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="wrapper">
        <div className="nav__brand">
          <NavLink activeClassName="active" to="/">AlgoSolver</NavLink>
        </div>
        {isBigPhone ? (
          <NavMenu />
        ) : (
          <div className="nav__links">
            <ul className="nav__list list1">
              <li className="nav__item">
                <NavLink activeClassName="active" to="/playground" className="nav__link">
                  playground
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink activeClassName="active" to="/explore" className="nav__link">
                  explore
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink activeClassName="active" to="/blog" className="nav__link">
                  Blog
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink activeClassName="active" to="/elements" className="nav__link">
                  elements
                </NavLink>
              </li>
            </ul>
            <ul className="nav__list">
              <RenderAuth menu="nav" />
            </ul>
          </div>
        )}
      </div>
    </NavbarContainer>
  );
};

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const close = () => setIsMenuOpen(false);
  return (
    <div className="menu">
      <div className="menu__icon">
        <div
          onClick={() => setIsMenuOpen((e) => !e)}
          class={`icon nav-icon-5 ${isMenuOpen ? "open" : null}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="landing"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.nav
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              className="menu__container"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="menu__body">
                <ul className="menu__list list1">
                  <li className="menu__item">
                    <NavLink activeClassName="active"
                      onClick={close}
                      to="/playground"
                      className="menu__link"
                    >
                      playground
                    </NavLink>
                  </li>
                  <li className="menu__item">
                    <NavLink activeClassName="active" onClick={close} to="/explore" className="menu__link">
                      explore
                    </NavLink>
                  </li>
                  <li className="menu__item">
                    <NavLink activeClassName="active" onClick={close} to="/blog" className="menu__link">
                      Blog
                    </NavLink>
                  </li>
                  <li className="menu__item">
                    <NavLink activeClassName="active" onClick={close} to="/elements" className="menu__link">
                      elements
                    </NavLink>
                  </li>
                </ul>
                <ul className="menu__list">
                  <RenderAuth close={close} />
                </ul>
              </div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Navbar;
