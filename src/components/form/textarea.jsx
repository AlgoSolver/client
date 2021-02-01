import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import classNames from 'classnames';

const Unit= styled(motion.div)`
  position: relative;
  margin-bottom: 1.5rem;
  .error {
    display: inline-block;
    margin: 0.4rem 0 0.4rem;
    color: ${({ theme }) => theme.colors.red[1]};
    font-size: 1.5rem;
  }
  `

const Area = styled.textarea`
    border: 0.2rem solid ${({ theme }) => theme.colors.light[0]};
    appearance: none;
    color: ${({ theme }) => theme.colors.dark[1]};
    padding:1rem;
    outline: none;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items:center;
    width: 100%;
    border-radius: .6rem;
    font-family: "Linotte-Light";
    font-size: 1.6rem;
    letter-spacing: 0.2px;
    height:18rem;
    overflow: hidden;
    overflow-wrap: break-word;
    resize:none;
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
    &.medium{
      height:24rem;
    }
    &.big{
      height: 44rem;
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


export const TextArea = ({
	label,
	placeholder,
	type="text",
	name,
	error,
	register,
	children,
	icon,
	big,
  medium,
	...rest
})=>{
	let iconExist = icon ? true : false;
	const classes = classNames(
	error && 'input__error',
  big && 'big',
  medium && 'medium'
	)
	return (
    <Unit iconExist>
      {label && <Label htmlFor={name}>{label}</Label>}
        <Area
          iconExist={iconExist}
          ref={register}
          id={name}
          className={classes}
          name={name}
          type={type}
          placeholder={placeholder}
         {...rest}
        />  
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

