import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
export const Form = ({ children }) => {
  return (
    <FormWrapper>
      <FormContainer>{children}</FormContainer>
    </FormWrapper>
  );
};

export const CheckBox = () => {
  return (
    <Unit>
      <label htmlFor="remember" class="checkbox">
        <input
          id="remember"
          type="checkbox"
          tabindex="0"
          name="remember"
          value=""
        />
        <div class="checkbox__input">
          <svg viewBox="0 0 28 28">
            <path
              d="M7.3 15 l4.5 4 l10 -10"
              strokeWidth="3"
              strokeMiterlimit="10"
            ></path>
          </svg>
        </div>
        <div class="checkbox__label">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>Remember me</font>
          </font>
        </div>
      </label>
    </Unit>
  );
};

export const Divider = () => {
  return (
    <DividerContainer>
      <div>
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>or</font>
        </font>
      </div>
    </DividerContainer>
  );
};

 
export const TextInput = ({
  label,
  placeholder,
  type="text",
  name,
  error,
  register,
  children,
  icon,
  ...rest
}) => {
  let iconExist = icon ? true : false;
  return (
    <Unit iconExist>
      {label && <Label htmlFor={name}>{label}</Label>}
        <Input
          iconExist={iconExist}
          ref={register}
          id={name}
          className={`${error ? "input__error" : ""}`}
          name={name}
          type={type}
          placeholder={placeholder}
         {...rest}
        />
         {iconExist && <Icon className="icon__wrapper">{icon()}</Icon>}
 
        {children ? children : null}
        <AnimatePresence exitBeforeEnter>
          {error && (
            <motion.span
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="error"
            >
              {error}
            </motion.span>
          )}
        </AnimatePresence>
    </Unit>
  );
};

const Unit = styled(motion.div)`
  position: relative;
  margin-bottom: 2rem;
  .error {
    display: inline-block;
    margin: 0.4rem 0 0.4rem;
    color: ${({ theme }) => theme.colors.red[1]};;
    font-size: 1.5rem;
  }
  .checkbox {
    cursor: pointer;
    margin: 0;
    padding: 0;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    input {
      position: absolute;
      opacity: 0;
      &:checked ~ .checkbox__input {
        border-color: ${({ theme }) => theme.colors.primary[1]};
        background-color: ${({ theme }) => theme.colors.primary[1]};
        svg {
          path {
            transition: stroke-dashoffset 0.2s ease-in;
            stroke-dashoffset: 0;
          }
        }
      }
    }
    &__label {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      font-weight: 700;
      color: ${({ theme }) => theme.text2};
      font-size: 1.6rem;
    }
    &__input {
      margin-top: 0.2rem;
      height: 2rem;
      width: 2rem;
      float: left;
      margin: -0.1rem 10px 0 0;
      position: relative;
      border-radius: 0.5rem;
      border: 0.2rem solid #d5dbde;
      background-color: #fff;
      -webkit-transition: all 0.2s ease-out;
      -o-transition: all 0.2s ease-out;
      transition: all 0.2s ease-out;
      &::after {
        content: "";
        position: absolute;
        top: -0.2rem;
        left: -0.2rem;
        bottom: -0.2rem;
        right: -0.2rem;
        opacity: 0;
        border-radius: 0.5rem;
        -webkit-transition: opacity 0.2s ease-in-out 0.05s;
        -o-transition: opacity 0.2s ease-in-out 0.05s;
        transition: opacity 0.2s ease-in-out 0.05s;
        -webkit-box-shadow: 0 3px 4px 0 rgba(255, 111, 0, 0.4);
        box-shadow: 0 3px 4px 0 rgba(255, 111, 0, 0.4);
      }
      svg {
        position: absolute;
        height: 2rem;
        width: 2rem;
        top: -0.2rem;
        left: -0.2rem;
        path {
          stroke: #fff;
          stroke-width: 3px;
          fill: transparent;
          stroke-dasharray: 27;
          stroke-dashoffset: 27;
          -webkit-transition: stroke-dashoffset 0.2s ease-in;
          -o-transition: stroke-dashoffset 0.2s ease-in;
          transition: stroke-dashoffset 0.2s ease-in;
        }
      }
    }
    &:hover {
      .checkbox__input {
        border-color: ${({ theme }) => theme.colors.primary[1]};
        &::after {
          opacity: 1;
        }
      }
    }
  }
`;
const Icon = styled.div`
  position: absolute;
  top:50%;
  left:.8rem;
  pointer-events: none;
  transform: translateY(-50%);
  svg{
    *{
      stroke:${({ theme }) => theme.colors.dark[3]};
      transition: stroke .2s ease;
    }
  }
`
const Input = styled.input`

    border: 0.2rem solid ${({ theme }) => theme.colors.light[0]};
    appearance: none;
    color: ${({ theme }) => theme.colors.dark[0]};
    font-weight: 700;
    padding: 0 1.5rem;
    outline: none;
    transition: all 0.2s ease;
    display: block;
    width: 100%;
    border-radius: .6rem;
    height: 3.8rem;
    font-family: "Linotte-Light";
    font-size: 1.6rem;
    letter-spacing: 0.2px;
    padding-left: ${({iconExist})=> iconExist ? '4rem' :'1.5rem'};
    &::placeholder {
      color: ${({ theme }) => theme.colors.dark[3]};
      font-weight: bold;
      font-family: "Linotte-Light";
    }
    &:hover {
      border-color: ${({ theme }) => theme.colors.dark[4]};
    }
    &:focus {
      border-color: ${({ theme }) =>theme.colors.primary[1]};
    }
    &:focus ~ .icon__wrapper{
       svg{
        *{
          stroke: ${({ theme }) =>theme.colors.primary[1]}  !important;
        }
       }
    }
    &.input__error {
      border-color: ${({ theme }) =>theme.colors.red[1]};
    }
  
`;
const Label = styled.label`
  font-size: 1.6rem;
  color: ${({ theme }) =>  theme.colors.dark[1]};
  font-weight: 600;
  line-height: 1.6;
  display: inline-block;
  font-family: "Linotte-Light";
  padding-bottom: 0.6rem;
`;
const FormWrapper = styled.div`
  min-height: calc(100vh - 6.4rem);
  padding: 2rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormContainer = styled.div`
  width: 39rem;
  padding: 2rem 2rem 2rem;
  background: ${({ theme }) => theme.colors.light[4]};
  box-shadow:${({ theme }) => theme.elevation[3].shadow};
  border-radius: 2rem;
  margin: 0 auto;
  form {
    width: 100%;
  }
`;

const DividerContainer = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 1rem;
  font-size: 1.6rem;
  line-height: 17.5px;
  color: #d5dbde;
  background-color: inherit;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-line-pack: center;
  align-content: center;
  font-family: "Linotte";
  &::before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #d5dbde;
    -ms-flex-item-align: center;
    align-self: center;
  }
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #d5dbde;
    -ms-flex-item-align: center;
    align-self: center;
  }
  div {
    padding: 0 17.5px;
  }
`;
