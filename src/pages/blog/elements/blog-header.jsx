import styled from 'styled-components';
import BlogHeaderSearch from './blog-header-search'
import BlogHeaderTabs from './blog-header-tabs'
const BlogHeaderContainer = styled.div`
	background:${({theme})=>theme.gradients[2]};
	padding:2rem;
	min-height:35vh;
	display:flex;
	flex-direction:column;
	justify-content:center;
`

const BlogHeader = ()=>{
	return <BlogHeaderContainer>
		<BlogHeaderSearch />
		<BlogHeaderTabs />
	</BlogHeaderContainer>
}

export default BlogHeader;