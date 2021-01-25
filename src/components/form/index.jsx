import styled from "styled-components";
import { motion } from "framer-motion";
import classNames from 'classnames';
import {TextInput} from './text-input';
import {CheckBox} from './checkbox';
import {Toggle} from './toggle';


const Form = ({ children,...rest }) => {
  return (
    <FormWrapper {...rest}>
      <FormContainer>{children}</FormContainer>
    </FormWrapper>
  );
};

 const Divider = ({mg="2rem 0 1rem"}) => {
  return (
    <DividerContainer mg={mg}>
      <div>
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>or</font>
        </font>
      </div>
    </DividerContainer>
  );
};

 

 
 
const FormWrapper = styled(motion.div)`
  padding: 2rem 0;
  flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormContainer = styled.div`
  width: 39rem;
  padding: 2rem 2rem 2rem;
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
  margin:${({mg})=>mg};
  font-size: 1.6rem;
  line-height: 17.5px;
  color: ${({theme})=>theme.colors.dark[3]};
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
    background-color: ${({theme})=>theme.colors.dark[4]};
    -ms-flex-item-align: center;
    align-self: center;
  }
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: ${({theme})=>theme.colors.dark[4]};
    -ms-flex-item-align: center;
    align-self: center;
  }
  div {
    padding: 0 17.5px;
  }
`;
export  {TextInput,Form,Toggle,CheckBox,Divider};
