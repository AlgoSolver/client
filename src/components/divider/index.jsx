import styled from "styled-components";

export const Divider = styled.div`
  height: 1px;
  margin: ${({ mg }) => (mg ? mg : "2.4rem 0")};
  background-color: ${({ theme, color }) => (color ? theme[color] : "#e5e5ea")};
`;
