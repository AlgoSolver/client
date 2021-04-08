import styled from "styled-components";

const EditorFooterContainer = styled.div` 
	background:${({theme})=>theme.colors.light[4]};
	padding:1rem;
	border-top:1px solid ${({theme})=>theme.colors.light[1]};
`

const EditorFooter = ()=>{
	return <EditorFooterContainer>
          islam
	</EditorFooterContainer>
}

export default EditorFooter;