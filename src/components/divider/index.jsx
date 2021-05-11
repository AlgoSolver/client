import styled from "styled-components";

export const Divider = styled.div`
  height: 1px;
  margin: ${({ mg }) => (mg ? mg : "2.4rem 0")};
  background-color: ${({ theme, color, layer }) =>
    color ? theme.colors[color][layer] : "#e5e5ea"};
`;
