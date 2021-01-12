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
  type,
  name,
  error,
  register,
  children,
}) => {
  return (
    <Unit>
      <Label htmlFor={name}>{label}</Label>
      <Input>
        <input
          ref={register}
          id={name}
          className={`${error ? "input__error" : ""}`}
          name={name}
          type={type}
          placeholder={placeholder}
        />
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
      </Input>
    </Unit>
  );
};

const Unit = styled(motion.div)`
  margin-bottom: 2rem;
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
        border-color: ${({ theme }) => theme.primary};
        background-color: ${({ theme }) => theme.primary};
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
        border-color: ${({ theme }) => theme.primary};
        &::after {
          opacity: 1;
        }
      }
    }
  }
`;

const Input = styled.div`
  position: relative;
  border-radius: 1rem;
  input[type="text"],
  input[type="password"] {
    border: 0.2rem solid #d5dbde;
    appearance: none;
    color: ${({ theme }) => theme.text2};
    font-weight: 700;
    padding: 0 1.5rem;
    outline: none;
    transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out;
    display: block;
    width: 100%;
    border-radius: inherit;
    height: 4rem;
    font-family: "Linotte-Light";
    font-size: 1.6rem;
    &::placeholder {
      color: #d5dbde;
      font-weight: bold;
      font-family: "Linotte-Light";
    }
    &:hover {
      border-color: ${({ theme }) => theme.text3};
    }
    &:focus {
      border-color: ${({ theme }) => theme.primary};
    }
    &.input__error {
      border-color: red;
    }
  }
  .error {
    display: inline-block;
    margin: 0.4rem 0 0.4rem;
    color: red;
    font-size: 1.5rem;
  }
`;
const Label = styled.label`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.text3};
  font-weight: 600;
  line-height: 1.6;
  display: inline-block;
  font-family: "Linotte-Light";
  padding-bottom: 0.6rem;
`;
const FormWrapper = styled.div`
  min-height: 100vh;
  padding: 12rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormContainer = styled.div`
  width: 41rem;
  padding: 5rem 5rem 2rem;
  background: ${({ theme }) => theme.bg2};
  box-shadow: ${({ theme }) => theme.shadow2};
  box-shadow: 0 80px 60px 0 rgba(41, 48, 51, 0.08);
  border-radius: 4rem;
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
