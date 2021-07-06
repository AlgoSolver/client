import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";
import { useState } from "react";
import { Hide, Show } from "../../assets/icons/";
import {EXPAND_WITH_FADE} from '../../shared/constants'
/* Components / Input / Default / 12px padding */

// position: absolute;
// width: 360px;
// height: 44px;
//
//
//
// /* Base */
//
// position: absolute;
// left: 0px;
// right: 0px;
// top: 0%;
// bottom: 0%;
//
//
//
// /* Color */
//
// position: absolute;
// left: 0%;
// right: 0%;
// top: 0%;
// bottom: 0%;
//
// /* Colors / White */
// background: #FFFFFF;
// mix-blend-mode: normal;
// border-radius: 4px;
//
//
// /* Border */
//
// position: absolute;
// left: 0%;
// right: 0%;
// top: 0%;
// bottom: 0%;
//
// /* Borders / 1px / Gray / 200 */
// border: 1px solid #D5D7DB;
// box-sizing: border-box;
// border-radius: 4px;
//
//
// /* Content */
//
// position: absolute;
// height: 24px;
// left: 12px;
// right: 12px;
// top: calc(50% - 24px/2);
//
//
//
// /* Text */
//
// position: absolute;
// height: 16px;
// left: 0px;
// right: 0px;
// top: calc(50% - 16px/2);
//
// /* H200 / Regular - 14px */
// font-family: Inter;
// font-style: normal;
// font-weight: normal;
// font-size: 14px;
// line-height: 16px;
// /* identical to box height, or 114% */
//
// /* Colors / Gray / 300 */
// color: #BABDC2;

// const Show = ()=><div>Show</div>
// const Hide = ()=><div>Hide</div>

const Unit = styled(motion.div)`
  position: relative;
  margin-bottom: 1.5rem;
  .error {
    display: inline-block;
    margin: 0.4rem 0 0.4rem;
    color: ${({ theme }) => theme.colors.red[0]};
    font-size: 1.5rem;
  }
  .form__password {
    position: absolute;
    top: 50%;
    right: 0.8rem;
    display: flex;
    align-items: center;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 2;
  }
  .input__container {
    position: relative;
    svg {
      path {
        stroke: ${({ theme }) => theme.colors.dark[2]};
      }
    }
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 0.8rem;
  pointer-events: none;
  transform: translateY(-50%);

  svg {
    * {
      stroke: ${({ theme }) => theme.colors.dark[3]};
      transition: stroke 0.2s ease;
    }
  }
`;
const Input = styled.input`
  border: 0.1rem solid ${({ theme }) => theme.colors.gray[2]};
  appearance: none;
  color: ${({ theme }) => theme.colors.dark[1]};
  font-weight: 700;
  padding: 0 1.5rem;
  outline: none;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  width: 100%;
  border-radius: 0.4rem;
  height: 3.8rem;
  font-family: "Linotte";
  font-size: 1.6rem;
  letter-spacing: 0.2px;
  padding-left: ${({ iconExist }) => (iconExist ? "4rem" : "1.5rem")};
  padding-right: ${({ type }) => (type === "password" ? "4rem" : "1.5rem")};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[1]};
    font-weight: bold;
    font-family: "Linotte";
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.gray[1]};
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[0]};
  }
  &:focus ~ .icon__wrapper {
    svg {
      * {
        stroke: ${({ theme }) => theme.colors.primary[0]} !important;
      }
    }
  }
  &.input__error {
    border-color: ${({ theme }) => theme.colors.red[0]};
  }
  &.big {
    height: 4.2rem;
  }
`;
const Label = styled.label`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.dark[0]};
  font-weight: 600;
  line-height: 1.6;
  display: inline-block;
  padding-bottom: 0.2rem;
`;

export const TextInput = ({
  label,
  placeholder,
  type = "text",
  name,
  error,
  register,
  children,
  icon,
  big,
  className,
  ...rest
}) => {
  const [show, setShow] = useState(false);
  let iconExist = icon ? true : false;
  const classes = classNames(error && "input__error", big && "big",className);

  return (
    <Unit iconExist>
      {label && <Label htmlFor={name}>{label}</Label>}
      <div className="input__container">
        <Input
          iconExist={iconExist}
          ref={register}
          id={name}
          className={classes}
          name={name}
          type={show ? "text" : type}
          placeholder={placeholder}
          {...rest}
        />
        {iconExist && <Icon className="icon__wrapper">{icon("2rem")}</Icon>}
        {type === "password" && (
          <div className="form__password" onClick={() => setShow((e) => !e)}>
            {!show ? <Show /> : <Hide />}
          </div>
        )}
      </div>
      {children ? children : null}
      <AnimatePresence exitBeforeEnter>
        {error && (
          <motion.div
            style={{overflow:'hidden'}}
            variants={EXPAND_WITH_FADE}
            initial="closed"
            animate="open"
            exit="closed"
            transition="transition"
          >
          <span className="error">
              {error}
          </span>
          </motion.div>
        )}
      </AnimatePresence>
    </Unit>
  );
};
