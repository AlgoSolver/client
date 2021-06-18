import classNames from "classnames";

import {ButtonContainer} from './style';
import {Spinner} from "../spinner";

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
  buttonType = "submit",
  text,
  iconLeft,
  ghost,
  color = null,
  icon = null,
  scale = true,
  iconsize = "2.4rem",
  iconfill = "#1c1c28",
  mg,
  type,
  fill,
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
    <ButtonContainer
      style={style}
      className={classes}
      buttonType={type || theme}
      type={buttonType}
      layer={layer}
      mg={mg}
      disabled={disabled || loading}
      fill={fill}
      {...rest}
    >
       {loading && <div className="center spinner__container"><Spinner size="2.5rem" color="dark" layer={0}/></div>}
        {
          withIcon ? (
          <>
            <span className="cont">{children}</span>
            <span className="icon">{withIcon({ iconsize, iconfill })}</span>
          </>
        ) : (
          children
        )}
    </ButtonContainer>
  );
};
export default Button;
