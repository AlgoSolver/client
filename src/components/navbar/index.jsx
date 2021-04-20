import styled from "styled-components";
import { NavLink,Link } from "react-router-dom";
import Button from "../button/";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Messgae from "../../components/message/";
import { useAuth, useLogout } from "../../hooks/user";
import {ArrowDown2,Logout as LogoutIcon} from '../../assets/icons';
import Dropdown from '../dropdown'
import Text from '../Text'
import {Divider} from '../divider'

const AccountNavContainer = styled(motion.nav)`
  background: ${({ theme }) => theme.colors.light[4]};
  box-shadow: ${({ theme }) => theme.elevation[8].shadow};
  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    height: 6.4rem;
  }
  .nav__brand {
    color: ${({ theme }) => theme.colors.dark[1]};
    font-size: 3.6rem;
    font-family: "Avenir-bold";
  }
`;

const UserEntityContainer=styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  &:hover{
    .user__name{
      background: ${({ theme }) => theme.colors.light[1]};
    }
  }
  .user__img{
    position: absolute;
    width:5rem;
    height:5rem;
    top:0;
    left:0;
    transform: translate(-50%,-.5rem);
    border-radius: 2.5rem;
    overflow: hidden;
    img{
      width:100%;
      max-width: 100%;
      user-select: none;
    }
  }
  .user__name{
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right:1rem;
    padding-left:3.5rem;
    border-radius:15rem;
    background: ${({ theme }) => theme.colors.light[4]};
    box-shadow: ${({ theme }) => theme.elevation[4].shadow};
    transition: background .3s easy;
    span{
      font-size:1.6rem;
      display: inline-block;
      margin-right: .5rem;
      user-select: none;
    }

  }
`
const DropdownLinkContainer = styled(Link)`
  display: block;
  .link_container{
    padding:.8rem 1.6rem;
    transition: background .3s;
    background: ${({ theme }) => theme.colors.light[4]};
    user-select: none;
    &:hover{
      background: ${({ theme }) => theme.colors.light[3]};
    }
  }
`
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
      <Button withIcon={()=><LogoutIcon />} type="light" mg=".6rem 1.6rem 0" style={{width: "-webkit-fill-available"}} loading={isLoading} onClick={logout}>
        Logout
      </Button>
    </>
  );
};
const DropdownLink = ({children,to,onClick})=>{
  return <DropdownLinkContainer to={to} onClick={onClick}>
    <div className="link_container">
      {children}
    </div>
  </DropdownLinkContainer>
}
const UserEntity = ({username,img})=>{
  return <UserEntityContainer>
    <div className="user__img">
      <img alt={username} src={img} />
    </div>
    <div className="user__name">
      <span>
        {username}
      </span>
        <ArrowDown2 />
      </div>
  </UserEntityContainer>
}

const RenderAuth = ({ menu = "menu", close = () => {} }) => {
  const { data } = useAuth(false);
  if (data?.username) {
    return (
      <>
        <li className={`${menu}__item`}>
          <Dropdown
            body={()=><UserEntity username={data.username} img={'https://avatars.githubusercontent.com/u/79712616?v=4'} />}
            direction="right"
            width="15.5rem"
            main={(close)=>(<>
              <DropdownLink onClick={close} to={`/${data.username}`}>
                <Text layer={2} type="h5" mg="0">
                   Profile
                </Text>
              </DropdownLink>
              <DropdownLink onClick={close} to={`/${data.username}/submissions`}>
                <Text layer={2} type="h5" mg="0">
                  Your Submission
                </Text>
              </DropdownLink>
              <DropdownLink onClick={close} to={`/${data.username}/playgrounds`}>
                <Text layer={2} type="h5" mg="0">
                  Your Playgrounds
                </Text>
              </DropdownLink>
              <Divider mg=".4rem 0" />
              <Logout />
            </>)}
          >
          </Dropdown>
        </li>
      </>
    );
  }
  if (menu === "nav")
    return (
      <>
        <li className="nav__item">
          <NavLink
            activeClassName="active"
            onClick={close}
            to="/accounts/login"
            className="nav__link"
          >
            Login
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            activeClassName="active"
            onClick={close}
            to="/accounts/signup"
          >
            <Button
              circle
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
          <NavLink
            activeClassName="active"
            onClick={close}
            to="/accounts/login"
            className="menu__link"
          >
            login
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            activeClassName="active"
            onClick={close}
            to="/accounts/signup"
            className="menu__link"
          >
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
    overflow: visible;
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
    &__item {
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
      &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 0;
        background: ${({ theme }) => theme.colors.primary[0]};
        border-radius: 0.3rem 0.3rem 0 0;
        -webkit-transition: height 0.25s;
        -o-transition: height 0.25s;
        transition: height 0.25s;
      }
      &.active {
        color: ${({ theme }) => theme.colors.dark[0]};
        &::before {
          height: 0.3rem;
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
          <NavLink activeClassName="active" to="/">
            AlgoSolver
          </NavLink>
        </div>
        {isBigPhone ? (
          <NavMenu />
        ) : (
          <div className="nav__links">
            <ul className="nav__list list1">
              <li className="nav__item">
                <NavLink
                  activeClassName="active"
                  to="/playground"
                  className="nav__link"
                >
                  playground
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  activeClassName="active"
                  to="/explore"
                  className="nav__link"
                >
                  explore
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  activeClassName="active"
                  to="/problems"
                  className="nav__link"
                >
                  problems
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  activeClassName="active"
                  to="/blog"
                  className="nav__link"
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  activeClassName="active"
                  to="/elements"
                  className="nav__link"
                >
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
                    <NavLink
                      activeClassName="active"
                      onClick={close}
                      to="/playground"
                      className="menu__link"
                    >
                      playground
                    </NavLink>
                  </li>
                  <li className="menu__item">
                    <NavLink
                      activeClassName="active"
                      onClick={close}
                      to="/explore"
                      className="menu__link"
                    >
                      explore
                    </NavLink>
                  </li>
                  <li className="menu__item">
                    <NavLink
                      activeClassName="active"
                      onClick={close}
                      to="/problems"
                      className="menu__link"
                    >
                      problems
                    </NavLink>
                  </li>
                  <li className="menu__item">
                    <NavLink
                      activeClassName="active"
                      onClick={close}
                      to="/blog"
                      className="menu__link"
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li className="menu__item">
                    <NavLink
                      activeClassName="active"
                      onClick={close}
                      to="/elements"
                      className="menu__link"
                    >
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
