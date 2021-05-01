import styled from "styled-components";
import { motion } from "framer-motion";
const Unit = styled(motion.div)`
  position: relative;
  margin-bottom: 1.5rem;
  display: inline-block;
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
        border-color: ${({ theme, color }) =>
          color ? theme.colors[color][1] : theme.colors.primary[1]};
        background-color: ${({ theme, color }) =>
          color ? theme.colors[color][1] : theme.colors.primary[1]};
        svg {
          path {
            transition: stroke-dashoffset 0.2s ease-in;
            stroke-dashoffset: 0;
          }
        }
      }
    }
    &__label {
      flex: 1;
      font-weight: 400;
      font-size: 1.5rem;
    }
    &__input {
      margin-top: 0.2rem;
      height: 2rem;
      width: 2rem;
      float: left;
      margin: -0.1rem 10px 0 0;
      position: relative;
      border-radius: 0.4rem;
      border: 0.1rem solid ${({ theme }) => theme.colors.gray[2]};
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
        border-color: ${({ theme }) => theme.colors.gray[1]};
        &::after {
          opacity: 1;
        }
      }
    }
  }
`;
export const CheckBox = ({ label, register, color, children }) => {
  return (
    <Unit color={color}>
      <label htmlFor={label} className="checkbox">
        <input
          id={label}
          type="checkbox"
          tabIndex="0"
          ref={register}
          name={label}
          value=""
        />
        <div className="checkbox__input">
          <svg viewBox="0 0 28 28">
            <path
              d="M7.3 15 l4.5 4 l10 -10"
              strokeWidth="3"
              strokeMiterlimit="10"
            ></path>
          </svg>
        </div>
        <div className="checkbox__label">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>{children}</font>
          </font>
        </div>
      </label>
    </Unit>
  );
};
