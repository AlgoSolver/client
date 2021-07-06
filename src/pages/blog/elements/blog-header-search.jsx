import styled from 'styled-components';
import {TextInput} from '../../../components/form/';
import Button from '../../../components/button/';
import {useRef} from 'react';
import {Search,Form} from '../../../assets/icons/';
import {useNavigate} from 'react-router-dom'
const BlogHeaderSearchContainer = styled.form`
	display:flex;
	background:${({theme})=>theme.colors.light[4]};
	padding:2rem 2rem;
	border-radius:1.5rem;
	max-width:70vw;
	align-itenms:center;
	width:100%;

	box-shadow: ${({ theme }) => theme.elevation[3].shadow};
	margin:0 auto;
	& > div:first-child{
		flex:1;
		margin-right:1rem;
		margin-bottom:0 !important;
	}
`

const BlogHeaderSearch = ()=>{
	const inputRef = useRef(null);
	const navigate = useNavigate()
	const handleSubmit = (e)=>{
		e.preventDefault();
		if(inputRef.current?.value?.length){
			navigate(`?keyword=${inputRef.current.value}`);
			inputRef.current.value="";
		}
	}
	return <BlogHeaderSearchContainer onSubmit={handleSubmit}>
		<TextInput 
		placeholder="Search about an article" 
		className="search__input" 
		big 
		register={inputRef}
		icon={Search} />
		<Button type="dark">
			Search
		</Button>
	</BlogHeaderSearchContainer>
}

export default BlogHeaderSearch;