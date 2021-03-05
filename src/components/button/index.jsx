import styled from "styled-components";
import classNames from "classnames";
import Loading from "../loading/index";

const types = [
  "primary",
  "green",
  "purple",
  "teal",
  "orange",
  "red",
  "dark",
  "blue",
];

const StyledButton = styled.button`
  font-size: 1.5rem;
  line-height: 1.6;
  background: ${({ theme, type, layer }) =>
    type === "light" ? theme.colors[type][4] : theme.colors[type][layer]};
  color: #fff;
  border-radius: 0.4rem;
  height: 4.2rem;
  min-width: 8rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition: all 200ms ease-in-out;
  font-family: "Avenir";
  letter-spacing: 0.02rem;
  border: 1px solid
    ${({ type, theme, layer }) =>
      type === "light" ? theme.colors[type][4] : theme.colors[type][layer]};
  &.circle {
    border-radius: 2.1rem;
  }
  &.big {
    height: 5.2rem;
    &.circle {
      border-radius: 2.6rem;
    }
  }
  svg {
    path {
      transition: all 200ms ease-in-out;
    }
  }
  &.small {
    height: 3.2rem;
    font-size: 1.4rem;
    font-family: "Avenir";
    &.circle {
      border-radius: 1.6rem;
    }
  }
  &.contained {
    color: ${({ theme, type }) =>
      types.some((item) => type === item)
        ? theme.colors.light[4]
        : theme.colors.dark[0]};
    &:hover {
      background: ${({ theme, type, layer }) => theme.colors[type][layer + 1]};
      border-color: ${({ theme, type, layer }) =>
        theme.colors[type][layer + 1]};
    }

    &:active {
      background: ${({ theme, type }) => theme.colors[type][0]};
      border-color: ${({ theme, type }) => theme.colors[type][0]};
      box-shadow: ${({ theme }) => theme.elevation[3].shadow};
    }
    &:focus {
      border-color: ${({ theme, type }) =>
        theme.colors[type][4] || theme.colors[type][3]};
    }
    .icon {
      svg {
        path {
          stroke: ${({ theme, type }) =>
            types.some((item) => type === item)
              ? theme.colors.light[4]
              : theme.colors.dark[0]};
        }
      }
    }
  }
  &.outlined {
    background: transparent;
    color: ${({ theme, type }) => theme.colors[type][0]};
    border-color: ${({ theme, type }) => theme.colors[type][0]};
    &:hover {
      color: ${({ theme, type }) =>
        type === "light" ? theme.colors.dark[0] : theme.colors[type][1]};
      background: ${({ theme, type }) =>
        theme.colors[type].length > 5
          ? theme.colors[type][6]
          : theme.colors[type][4]};
      border-color: ${({ theme, type }) => theme.colors[type][3]};
      path {
        stroke: ${({ theme, type }) =>
          type === "light"
            ? theme.colors.dark[0]
            : theme.colors[type][1]} !important;
      }
    }

    &:active {
      background: ${({ theme, type }) => theme.colors[type][4]};
      border-color: ${({ theme, type }) => theme.colors[type][2]};
      box-shadow: ${({ theme }) => theme.elevation[2].shadow};
    }
    &:focus {
      border-color: ${({ theme, type }) => theme.colors[type][0]};
    }

    .icon {
      svg {
        path {
          stroke: ${({ theme, type }) => theme.colors[type][1]};
        }
      }
    }
  }
  &.link {
    background: transparent;
    border: 0;
    text-decoration: underline;
    display: inline;
    color: ${({ color, theme }) =>
      color ? theme.colors[color][1] : theme.colors.blue[1]} !important;
    box-shadow: none;
    padding: 0;
    font-size: 1.4rem;
    &:hover {
      text-decoration: none;
    }
  }
  &.text {
    background: transparent;
    border: 0;
    display: inline;
    color: ${({ color, theme }) => (color ? color : theme.colors.dark[1])};
    box-shadow: none;
    &:hover {
      background: ${({ theme, type }) => theme.colors.primary[3]};
    }
  }
  &.ghost {
    background: transparent;
    border: 0;
    display: inline;
    color: ${({ color, theme }) => (color ? color : theme.colors.dark[1])};
    box-shadow: none;
    &:hover {
      background: ${({ theme, type, layer }) => theme.colors[type][layer]};
    }
  }
  &.squared {
    border-radius: 0;
  }
  &.block {
    display: block;
    width: 100%;
  }

  &.disabled {
    background: ${({ theme, type }) => theme.colors.gray[3]} !important;
    color: ${({ theme, type }) => theme.colors.dark[4]} !important;
    box-shadow: none;
    border-color: ${({ theme, type }) => theme.colors.light[0]} !important;
    cursor: not-allowed !important;
  }
  &.loading {
    background: ${({ theme, type }) => theme.colors.gray[3]} !important;
    color: ${({ theme, type }) => theme.colors.dark[4]} !important;
    box-shadow: none;
    border-color: ${({ theme, type }) => theme.colors.light[0]} !important;
    cursor: not-allowed !important;
    
  }
  &.withIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    &.left {
      flex-direction: row-reverse;
    }
    & > .icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &.icon {
    min-width: auto;
    padding: 0 1rem;
    &.big {
      width: 5.2rem;
      height: 5.2rem;
      &.circle {
        border-radius: 2.6rem;
      }
    }
  }
  &.flex {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  &.mg {
    margin: ${({ mg }) => mg};
  }
`;

const Button = ({
  children,
  disabled,
  big,
  theme = "primary",
  block,
  outlined,
  link,
  squared,
  withIcon,
  circle,
  style = {},
  className,
  layer = 0,
  loading,
  small,
  text,
  iconLeft,
  ghost,
  color = null,
  icon = null,
  scale = true,
  iconsize = "2.4rem",
  iconfill = "#1c1c28",
  mg,
  ...rest
}) => {
  const classes = classNames(
    className,
    `${outlined ? "outlined" : link ? "link" : "contained"}`,
    big && "big",
    small && "small",
    squared && "squared",
    block && "block",
    circle && "circle",
    loading && "loading",
    scale && "scaling",
    disabled && "disabled",
    text && "text",
    withIcon && "withIcon",
    icon && "icon",
    color && "color",
    mg && "mg",
    ghost && "ghost",
    iconLeft && "left"
  );

  return (
    <StyledButton
      style={style}
      className={classes}
      type={theme}
      layer={layer}
      mg={mg}
      disabled={disabled || loading}
      {...rest}
    >
      {!loading ? (
        withIcon ? (
          <>
            <span className="cont">{children}</span>
            <span className="icon">{withIcon({ iconsize, iconfill })}</span>
          </>
        ) : (
          children
        )
      ) : (
        <span className="center ">
          <Loading full={false} type="dark" layer={0} />
        </span>
      )}
    </StyledButton>
  );
};
export default Button;