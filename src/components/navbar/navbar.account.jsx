import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styled from 'styled-components';

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

const AccountsNav = () => {
  return (
    <AccountNavContainer>
      <div className="wrapper">
        <div>
          <Link className="nav__brand" to="/">
            AlgoSolver
          </Link>
        </div>
      </div>
    </AccountNavContainer>
  );
};

export default AccountsNav;