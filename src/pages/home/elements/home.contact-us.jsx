import styled from "styled-components";
import Button from "../../../components/button";
import Text from '../../../components/Text';
import {TextInput,TextArea} from '../../../components/form'
const ContactUsContainer = styled.div`
    padding:2rem;
    background: ${({theme})=>theme.colors.light[4]};
`
const ContactUs  = () =>{
    return <ContactUsContainer>
       <div className="wrapper">
           <Text type="h1" bold>
               Contact Us
           </Text>
           <div className="form">
               <div>
                   <TextInput label="Your Email" />
                   <TextInput  label="Your Full Name" />
               </div>
               <div>
                   <TextArea label="Write Your Message here" />
                </div>
           </div>
           <Button>
               Send
           </Button>
       </div>
    </ContactUsContainer>
}
export default ContactUs;