import styled from 'styled-components';
import Text from '../../components/Text/';
import {TextInput,CheckBox,Toggle} from '../../components/form/';
import {Activity} from '../../assets/icons/';

const FormContainer= styled.div`
	 padding:2rem;
	 .body{
	 	background: #fff;
	 	padding: 2rem
	 }
	`
const Form = ()=>{
	return <FormContainer>
		<Text type="h1">
			Forms
		</Text>
		<div className="body">
           <TextInput placeholder="Normal" />
           <TextInput error="Invalid Email" placeholder="error" />
           <TextInput label="With Label" />
           <TextInput placeholder="With Icon" icon={Activity} align="left"/>
            <TextInput placeholder="large" big/>
           <CheckBox label="remember" />
           <CheckBox label="remember2" color="green" />
           <Toggle name="labed">
           	 Remeber me
           </Toggle>
           <Toggle color="green" name="rem">
           	 Remeber me
           </Toggle>
		</div>
	</FormContainer>
}
export default Form;
