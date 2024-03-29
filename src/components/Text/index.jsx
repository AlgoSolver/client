import styled from "styled-components";
//import { motion } from "framer-motion";
import classNames from "classnames";

const StyledText = styled.div`
  font-weight: 300;
  font-size: 1.6rem;
  color: ${({ theme, color, layer }) => theme.colors[color][layer]};
  text-transform: ${({ transform }) => transform};
  font-family: ${({ family }) => family};
  &.h1 {
    font-size: 5.3rem;
    line-height: 1.15em;
    margin: 1rem 0;
  }
  &.h2 {
    font-size: 3.6rem;
    line-height: 1.5em;
    margin: 1rem 0;
  }
  &.h3 {
    font-size: 2.5rem;
    line-height: 1.5em;
    margin: 1rem 0;
  }
  &.h4 {
    font-size: 1.8rem;
    line-height: 1.5em;
    margin: 1rem 0;
  }
  &.h5 {
    font-size: 1.7rem;
    line-height: 1.55em;
    margin: 1rem 0;
  }
  &.h6 {
    font-size: 1.3rem;
    line-height: 1.5em;
    font-weight: 500;
    margin: 1rem 0;
  }
  &.p {
    font-style: normal;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
  &.lead {
    font-style: normal;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 2.4rem;
  }
  &.span {
    font-size: 1.5rem;
    display: inline-block;
  }
  &.pre {
    white-space: pre-wrap;
    overflow-x: auto;
    font-size: 1.6rem;
    font-family: MonoLisa;
    padding: 2rem;
    background: ${({ theme }) => theme.colors.light[0]};
    color: ${({ theme }) => theme.colors.primary[0]};
    border-radius: 1rem;
  }
  &.bold {
    font-family: ${({ family }) => family + "-Bold"};
  }
  &.size {
    font-size: ${({ size }) => size} !important;
  }
  &.mg {
    margin: ${({ mg }) => mg};
  }
  &.pd {
    margin: ${({ pd }) => pd};
  }
  &.center {
    text-align: center;
  }
  &.inline {
    display: inline-block;
  }
`;

const Text = ({
  children,
  type = "h3",
  className,
  bold,
  color = "dark",
  size,
  family = "Avenir",
  mg,
  pd,
  layer = 0,
  transform = "initial",
  center,
  inline,
  ...rest
}) => {
  const classes = classNames(
    className,
    bold && "bold",
    size && "size",
    center && "center",
    inline && "inline",
    type,
    mg,
    "mg",
    pd,
    "pd"
  );
  return (
    <StyledText
      layer={layer}
      className={classes}
      as={type}
      family={family}
      size={size}
      mg={mg}
      pd={pd}
      color={color}
      transform={transform}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

export default Text;
