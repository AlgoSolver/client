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
  background: ${({ theme, appearnc, layer }) =>
    appearnc === "light" ? theme.colors[appearnc][4] : theme.colors[appearnc][layer]};
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
    ${({ appearnc, theme, layer }) =>
      appearnc === "light" ? theme.colors[appearnc][4] : theme.colors[appearnc][layer]};
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
    color: ${({ theme, appearnc }) =>
      types.some((item) => appearnc === item)
        ? theme.colors.light[4]
        : theme.colors.dark[0]};
    &:hover {
      background: ${({ theme, appearnc, layer }) => theme.colors[appearnc][layer + 1]};
      border-color: ${({ theme, appearnc, layer }) =>
        theme.colors[appearnc][layer + 1]};
    }

    &:active {
      background: ${({ theme, appearnc }) => theme.colors[appearnc][0]};
      border-color: ${({ theme, appearnc }) => theme.colors[appearnc][0]};
      box-shadow: ${({ theme }) => theme.elevation[3].shadow};
    }
    &:focus {
      border-color: ${({ theme, appearnc }) =>
        theme.colors[appearnc][4] || theme.colors[appearnc][3]};
    }
    .icon {
      svg {
        path {
          stroke: ${({ theme, appearnc }) =>
            types.some((item) => appearnc === item)
              ? theme.colors.light[4]
              : theme.colors.dark[0]};
        }
      }
    }
  }
  &.outlined {
    background: transparent;
    color: ${({ theme, appearnc }) => theme.colors[appearnc][0]};
    border-color: ${({ theme, appearnc }) => theme.colors[appearnc][0]};
    &:hover {
      color: ${({ theme, appearnc }) =>
        appearnc === "light" ? theme.colors.dark[0] : theme.colors[appearnc][1]};
      background: ${({ theme, appearnc }) =>
        theme.colors[appearnc].length > 5
          ? theme.colors[appearnc][6]
          : theme.colors[appearnc][4]};
      border-color: ${({ theme, appearnc }) => theme.colors[appearnc][3]};
      path {
        stroke: ${({ theme, appearnc }) =>
          appearnc === "light"
            ? theme.colors.dark[0]
            : theme.colors[appearnc][1]} !important;
      }
    }

    &:active {
      background: ${({ theme, appearnc }) => theme.colors[appearnc][4]};
      border-color: ${({ theme, appearnc }) => theme.colors[appearnc][2]};
      box-shadow: ${({ theme }) => theme.elevation[2].shadow};
    }
    &:focus {
      border-color: ${({ theme, appearnc }) => theme.colors[appearnc][0]};
    }

    .icon {
      svg {
        path {
          stroke: ${({ theme, appearnc }) => theme.colors[appearnc][1]};
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
      background: ${({ theme, appearnc }) => theme.colors.primary[3]};
    }
  }
  &.ghost {
    background: transparent;
    border: 0;
    display: inline;
    color: ${({ color, theme }) => (color ? color : theme.colors.dark[1])};
    box-shadow: none;
    &:hover {
      background: ${({ theme, appearnc, layer }) => theme.colors[appearnc][layer]};
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
    background: ${({ theme, appearnc }) => theme.colors.gray[3]} !important;
    color: ${({ theme, appearnc }) => theme.colors.dark[4]} !important;
    box-shadow: none;
    border-color: ${({ theme, appearnc }) => theme.colors.light[0]} !important;
    cursor: not-allowed !important;
  }
  &.loading {
    background: ${({ theme, appearnc }) => theme.colors.gray[3]} !important;
    color: ${({ theme, appearnc }) => theme.colors.dark[4]} !important;
    box-shadow: none;
    border-color: ${({ theme, appearnc }) => theme.colors.light[0]} !important;
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
    svg {
      path {
        stroke: ${({ theme, appearnc }) =>
          types.some((item) => appearnc === item)
            ? theme.colors.light[4]
            : theme.colors.dark[0]};
      }
    }
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
  type = "primary",
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
  buttonType="submit",
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
      appearnc={type}
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
          <Loading full={false} appearnc="dark" layer={0} />
        </span>
      )}
    </StyledButton>
  );
};
export default Button;
