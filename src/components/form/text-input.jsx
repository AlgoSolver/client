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

const Input = styled.input`
    border: 0.2rem solid ${({ theme }) => theme.colors.light[0]};
    appearance: none;
    color: ${({ theme }) => theme.colors.dark[0]};
    font-weight: 700;
    padding: 0 1.5rem;
    outline: none;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items:center;
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
    &.big{
      height: 4.8rem;
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

export const TextInput = ({
	label,
	placeholder,
	type="text",
	name,
	error,
	register,
	children,
	icon,
	big,
	...rest
})=>{
	let iconExist = icon ? true : false;
	const classes = classNames(
	error && 'input__error',
	big && 'big'
	)
	return (
    <Unit iconExist>
      {label && <Label htmlFor={name}>{label}</Label>}
        <Input
          iconExist={iconExist}
          ref={register}
          id={name}
          className={classes}
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

