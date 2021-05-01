import styled from "styled-components";

const AuthContainer = styled.div`
  background: ${({ theme }) => theme.colors.light[0]};
  .form__body {
    max-width: 45rem;
    width: 100%;
    background: ${({ theme }) => theme.colors.light[4]};
    padding: 4rem 3rem 3rem;
    box-shadow: 3px -5px 40px rgb(205 205 212 / 10%);
    border-radius: 2rem;
    margin: 0 auto;
  }
`;
const Auth = ({ children }) => {
  return <AuthContainer>{children}</AuthContainer>;
};

export default Auth;
