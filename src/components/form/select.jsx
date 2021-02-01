import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";

const Unit = styled(motion.div)`
  position: relative;
  margin-bottom: 1.5rem;
  .error {
    display: inline-block;
    margin: 0.4rem 0 0.4rem;
    color: ${({ theme }) => theme.colors.red[1]};
    font-size: 1.5rem;
  }
`;

const SelectContainer = styled.select`
  border: 0.2rem solid ${({ theme }) => theme.colors.light[0]};
  appearance: none;
  color: ${({ theme }) => theme.colors.dark[0]};
  font-weight: 700;
  padding: 0 1.5rem;
  outline: none;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  width: 100%;
  border-radius: 0.6rem;
  height: 3.8rem;
  font-family: "Linotte-Light";
  font-size: 1.6rem;
  letter-spacing: 0.2px;
  background: ${({ theme }) => theme.colors.light[4]};
  &::placeholder {
    color: ${({ theme }) => theme.colors.dark[3]};
    font-weight: bold;
    font-family: "Linotte-Light";
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.dark[4]};
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[1]};
  }
  &:focus ~ .icon__wrapper {
    svg {
      * {
        stroke: ${({ theme }) => theme.colors.primary[1]} !important;
      }
    }
  }
  &.input__error {
    border-color: ${({ theme }) => theme.colors.red[1]};
  }
  &.big {
    height: 4.8rem;
  }
`;
const Label = styled.label`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.dark[1]};
  font-weight: 600;
  line-height: 1.6;
  display: inline-block;
  font-family: "Linotte-Light";
  padding-bottom: 0.6rem;
`;

export const Select = ({
  label,
  placeholder,
  type = "text",
  name,
  error,
  register,
  children,
  options = [],
  big,
  ...rest
}) => {
  const classes = classNames(error && "input__error", big && "big");
  return (
    <Unit iconExist>
      {label && <Label htmlFor={name}>{label}</Label>}
      <SelectContainer
        ref={register}
        id={name}
        className={classes}
        name={name}
        type={type}
        placeholder={placeholder}
        {...rest}
      >
        {options.map((item, idx) => (
          <option key={idx} value={item.value}>
            {item.label}
          </option>
        ))}
      </SelectContainer>

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
