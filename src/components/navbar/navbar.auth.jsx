import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

import Dropdown from "../dropdown";
import Text from "../Text";
import Button from "../button";

import { Divider } from "../divider";
import { ArrowDown2 } from "../../assets/icons";
import { useAuth } from "../../hooks/user";
import Logout from "./navbar.logout";

const DropdownLinkContainer = styled(Link)`
  display: block;
  .link_container {
    padding: 0.8rem 1.6rem;
    transition: background 0.3s;
    background: ${({ theme }) => theme.colors.light[4]};
    user-select: none;
    &:hover {
      background: ${({ theme }) => theme.colors.light[3]};
    }
  }
`;

const UserEntityContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  &:hover {
    .user__name {
      background: ${({ theme }) => theme.colors.light[1]};
    }
  }
  .user__img {
    position: absolute;
    width: 5rem;
    height: 5rem;
    top: 0;
    left: 0;
    transform: translate(-50%, -0.5rem);
    border-radius: 2.5rem;
    overflow: hidden;
    img {
      width: 100%;
      max-width: 100%;
      user-select: none;
      object-fit: cover;
      height: 100%;
    }
  }
  .user__name {
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 1rem;
    padding-left: 3.5rem;
    border-radius: 15rem;
    background: ${({ theme }) => theme.colors.light[4]};
    box-shadow: ${({ theme }) => theme.elevation[4].shadow};
    transition: background 0.3s easy;
    span {
      font-size: 1.6rem;
      display: inline-block;
      margin-right: 0.5rem;
      user-select: none;
    }
  }
`;

const UserEntity = ({ username, img }) => {
  return (
    <UserEntityContainer>
      <div className="user__img">
        <img alt={username} src={img} />
      </div>
      <div className="user__name">
        <span>{username}</span>
        <ArrowDown2 />
      </div>
    </UserEntityContainer>
  );
};
const DropdownLink = ({ children, to, onClick }) => {
  return (
    <DropdownLinkContainer to={to} onClick={onClick}>
      <div className="link_container">{children}</div>
    </DropdownLinkContainer>
  );
};

const RenderAuth = ({ menu = "menu", close = () => {} }) => {
  const { data } = useAuth(false);
  console.log(data);
  if (data?.username) {
    return (
      <>
        <li className={`${menu}__item`}>
          <Dropdown
            body={() => (
              <UserEntity
                username={data.username}
                img={data?.imgURL || "https://avatars.githubusercontent.com/u/79712616?v=4"}
              />
            )}
            direction="right"
            width="15.5rem"
            main={(close) => (
              <>
                <DropdownLink onClick={close} to={`/${data.username}`}>
                  <Text layer={2} type="h5" mg="0">
                    Profile
                  </Text>
                </DropdownLink>
                <DropdownLink
                  onClick={close}
                  to={`/${data.username}/submissions`}
                >
                  <Text layer={2} type="h5" mg="0">
                    Your Submission
                  </Text>
                </DropdownLink>
                <DropdownLink
                  onClick={close}
                  to={`/${data.username}/playgrounds`}
                >
                  <Text layer={2} type="h5" mg="0">
                    Your Playgrounds
                  </Text>
                </DropdownLink>
                <Divider mg=".4rem 0" />
                <Logout />
              </>
            )}
          ></Dropdown>
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
            <Button circle theme="primary">
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

export default RenderAuth;