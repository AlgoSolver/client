import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../../components/button";
import { ArrowRight } from "../../../assets/icons/";
import code from "../../../assets/animations/code-lanch.json";
import LottieAnimation from "../../../shared/lottie";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.gradients[0]};
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  .wrapper {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .custom-shape-divider-bottom-1611325617 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1611325617 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 164px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-bottom-1611325617 .shape-fill {
    fill: ${({ theme }) => theme.colors.light[0]};
  }

  /** For mobile devices **/
  @media (max-width: 767px) {
    .custom-shape-divider-bottom-1611325617 svg {
      width: calc(100% + 1.3px);
      height: 0px;
    }
  }
`;
const NavbarContainer = styled(motion.nav)`
  display: flex;
  align-items: center;
  padding: 2rem 0;
  .nav {
    &__brand {
      margin-right: 4rem;
      font-size: 3rem;
      color: ${({ theme }) => theme.colors.light[4]};
    }
    &__links {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__list {
      list-style-type: none;
      display: flex;
      align-items: center;
      &.list1 {
        flex: 1;
        justify-content: flex-start;
      }
    }
    &__item:not(:last-child) {
      margin-right: 1rem;
    }
    &__link {
      padding: 1rem 1rem;
      font-size: 1.6rem;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.light[0]};
      transition: background 0.2s ease, color 0.2s ease;
      border-radius: 1rem;
      &:hover {
        color: ${({ theme }) => theme.colors.light[4]};
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
        background-color: #fff;
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
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin-bottom: 5rem;
  .intro {
    flex: 0.5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &__title {
      font-weight: 700;
      font-size: 3.8rem;
      font-family: "Avenir-Bold";
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.light[4]};
    }
    &__subtitle {
      font-size: 1.6rem;
      font-weight: 300;
      line-height: 2;
      letter-spacing: 0.03rem;
      text-transform: capitalize;
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.light[2]};
    }
    a {
      button {
        width: 100%;
        margin: 0 auto;
      }
    }
    @media (max-width: 767px) {
      flex: 1;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
  .hero {
    flex: 0.5;
    position: relative;
    z-index: 10;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="wrapper">
        <Navbar />
        <Hero />
      </div>
      <div className="custom-shape-divider-bottom-1611325617">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </HeaderContainer>
  );
};

const Hero = () => {
  const isBigPhone = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <Row>
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="intro"
      >
        <h1 className="intro__title">
          Leverage Your <span>Computer Programming</span> Skills
        </h1>
        <p className="intro__subtitle">
          Algo solver was designed to help you to get sharp with algoritm, data
          structures, pattern techniques and more.
        </p>
        <Link to="/accounts/signup" style={{ display: "block" }}>
          <Button
            big
            circle
            color="light"
            withIcon={ArrowRight}
            theme="light"
            outlined
          >
            Make An Account
          </Button>
        </Link>
      </motion.div>
      {!isBigPhone && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="hero"
        >
          <LottieAnimation lotti={code} height="100%" width="100%" />
        </motion.div>
      )}
    </Row>
  );
};
const Navbar = () => {
  const isBigPhone = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <NavbarContainer
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="nav__brand">AlgoSolver</div>
      {isBigPhone ? (
        <NavMenu />
      ) : (
        <div className="nav__links">
          <ul className="nav__list list1">
            <li className="nav__item">
              <Link to="/playground" className="nav__link">
                playground
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/practise" className="nav__link">
                practise
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/problems" className="nav__link">
                problems
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/blog" className="nav__link">
                Blog
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/elements" className="nav__link">
                elements
              </Link>
            </li>
          </ul>
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/accounts/login" className="nav__link">
                Login
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/accounts/signup">
                <Button
                  big
                  outlined
                  circle
                  style={{
                    height: " 4.8rem",
                    padding: "0 2.4rem",
                    marginLeft: "2rem",
                  }}
                  theme="light"
                >
                  Signup
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </NavbarContainer>
  );
};

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                    <Link to="/playground" className="menu__link">
                      playground
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="/practise" className="menu__link">
                      practise
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="/problems" className="menu__link">
                      problems
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="/blog" className="menu__link">
                      Blog
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="/elements" className="menu__link">
                      elements
                    </Link>
                  </li>
                </ul>
                <ul className="menu__list">
                  <li className="menu__item">
                    <Link to="/accounts/login" className="menu__link">
                      login
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="/accounts/signup" className="menu__link">
                      signup
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Header;
