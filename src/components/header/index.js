import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../button/";
import { ArrowRight } from "../../assets/icons/";
import code from "../../assets/animations/code-lanch.json";
import LottieAnimation from "../../shared/lottie";
import { useMediaQuery } from "react-responsive";

const HeaderContainer = styled.header`
  min-height: 100vh;
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
    min-height: 54rem;
    .custom-shape-divider-bottom-1611325617 svg {
      width: calc(100% + 1.3px);
      height: 0px;
    }
  }
`;
const NavbarContainer = styled.nav`
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
    button {
      width: 70%;
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
      <div className="intro">
        <h1 className="intro__title">
          Leverage Your <span>Computer Programming</span> Skills
        </h1>
        <p className="intro__subtitle">
          Algo solver was designed to help you to get sharp with algoritm, data
          structures, pattern techniques and more.
        </p>
        <Button
          big
          circle
          color="light"
          icon={ArrowRight}
          theme="light"
          outlined
        >
          Make An Account
        </Button>
      </div>
      {!isBigPhone && (
        <div className="hero">
          <LottieAnimation lotti={code} height="100%" width="100%" />
        </div>
      )}
    </Row>
  );
};
const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="nav__brand">algoSlover</div>
      <div className="nav__links">
        <ul className="nav__list list1">
          <li className="nav__item">
            <Link to="/playground" className="nav__link">playground</Link>
          </li>
          <li className="nav__item">
            <Link to="/explore" className="nav__link">explore</Link>
          </li>
          <li className="nav__item">
            <Link to="/blog" className="nav__link">Blog</Link>
          </li>
          <li className="nav__item">
            <Link to="/home" className="nav__link">Home</Link>
          </li>
        </ul>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/login" className="nav__link">Login</Link>
          </li>
          <li className="nav__item">
            <Link to="/signup">
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
    </NavbarContainer>
  );
};
export default Header;
