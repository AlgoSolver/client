import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

export const NavbarContainer = styled(motion.nav)`
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