import styled from 'styled-components';
import {TextInput} from '../../../components/form/';
import Button from '../../../components/button/';
import {useRef} from 'react';
import {Search} from '../../../assets/icons/';
import {useNavigate} from 'react-router-dom'
import Text from '../../../components/Text/';
const BlogHeaderSearchContainer = styled.form`
	display:flex;
	min-width:50vw;
	max-width:70vw;
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
	return <>
	<Text type="h1" bold center color="light">
		Get the latest article
	</Text>
	<BlogHeaderSearchContainer onSubmit={handleSubmit}>
		<TextInput 
		placeholder="Search about an article" 
		className="search__input circle" 
		big
		register={inputRef}
		icon={Search} />
		<Button type="dark" circle>
			Search
		</Button>
	</BlogHeaderSearchContainer>
	</>
}

export default BlogHeaderSearch;