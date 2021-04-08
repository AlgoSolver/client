import styled from "styled-components";
import Text from "../../../components/Text";
import Button from "../../../components/button/";

const OutputContainer  = styled.div` 
    height:100%;
    display:flex;
    flex-direction:column;
	.header{
	background:${({theme})=>theme.colors.light[4]};
	padding:1.2rem 1rem;
	border-top:1px solid ${({theme})=>theme.colors.light[1]};
	}
	.console{
		flex:1;
	}
	.input{
	background:${({theme})=>theme.colors.light[4]};
	padding:1rem;
	position:relative;
	.open-box{
		position:absolute;
		padding:1rem;
		background:${({theme})=>theme.colors.light[4]};
		top:0;
		left:50%;
		transform:translate(-50%,-50%);
		z-index:2;
		height:5rem;
		width:auto;
		display:flex;
		align-items:center;
		justify-content:center;
		border-radius:2.5rem;
	}
	}
`
const OutputHeader = ()=>{
	return <div className="header">
      <Text type="h5" mg="0">
      	Output Status:
      </Text>
	</div>
}
const OutputConsole = ()=>{
	return <div className="console">

	</div>
}
const Input = ()=>{
	return <div className="input">
        <div className="open-box">
           <Button small type="dark" circle>
           	  Input
           </Button>
        </div>
	</div>
}
const EditorFooter = ()=>{
	return <OutputContainer>
	   <OutputHeader />
	   <OutputConsole />
	   <Input />
	</OutputContainer>
}

export default EditorFooter;