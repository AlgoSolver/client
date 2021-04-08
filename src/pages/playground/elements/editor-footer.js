import styled from "styled-components";
import Button from "../../../components/button/";

const EditorFooterContainer = styled.div` 
	background:${({theme})=>theme.colors.light[4]};
	padding:1rem;
	border-top:1px solid ${({theme})=>theme.colors.light[1]};
	display:flex;
	justify-content:flex-end;
`

const EditorFooter = ()=>{
	return <EditorFooterContainer>
         <Button small  type="dark">
					Share 
				</Button>
	</EditorFooterContainer>
}

export default EditorFooter;