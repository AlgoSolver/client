import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.light[4 * Math.random()]};
`;
