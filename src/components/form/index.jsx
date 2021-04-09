import styled from "styled-components";
import { motion } from "framer-motion";
import {TextInput} from './text-input';
import {CheckBox} from './checkbox';
import {Toggle} from './toggle';
import {TextArea} from './textarea';
import {Select} from './select';
import {Draft} from './draft';


const Form = ({ children,...rest }) => {
  return (
    <FormWrapper {...rest}>
        {children}
    </FormWrapper>
  );
};

 const Divider = ({mg="0.5 0 .5rem"}) => {
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
  padding: 2rem;
  flex:1;
`;


const DividerContainer = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: .5rem;
  margin-top: .5rem;
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
    background-color: ${({theme})=>theme.colors.gray[3]};
    -ms-flex-item-align: center;
    align-self: center;
  }
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: ${({theme})=>theme.colors.gray[3]};
    -ms-flex-item-align: center;
    align-self: center;
  }
  div {
    padding: 0 1rem;
  }
`;
export  {TextInput,Form,Toggle,CheckBox,Divider,TextArea,Select,Draft};
