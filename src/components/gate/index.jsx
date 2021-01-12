import styled from 'styled-components';

export const Box= styled.div`
	border-radius:1.5rem;
    background: ${({theme})=>theme.text};
    background-image: linear-gradient(to right, #434343 0%, black 100%);
    box-shadow: ${({theme})=>theme.shadow};
    padding:1.2rem;
`