
import Text from '../../components/Text/';
import styled from 'styled-components'


const Wrapper = styled.div`
	margin:15rem 10rem;
    
`
const Login = ()=>{
	return <Wrapper>
	   <Text type="h1" transform="capitalize">
		  hello Wolrld 
		</Text>
	   <Text type="h1" bold>
			hello Wolrld
		</Text>
		<Text type="h2" transform="capitalize" family="Linotte" bold>
			hello Wolrld2
		</Text>
       <Text type="h2" transform="capitalize" family="Gotham">
			hello Wolrld
		</Text>
		<Text type="h2" transform="capitalize">
			hello Wolrld
		</Text>
	   <Text type="h3" bold>
			hello Wolrld
		</Text>
		<Text type="h2" transform="capitalize" family="Linotte-Light">
			hello Wolrld
		</Text>
	   <Text type="h5">
			hello Wolrld
		</Text>
		 <Text 
		  type="p" 
		  size="2rem" color="primary"
		  family="Linotte"
		  >
			Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Eius itaque similique explicabo esse obcaecati nemo ratione quis et quam.	
		</Text>
		<Text 
		  type="p" 
		  size="2rem"
		  >
			Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Eius itaque similique explicabo esse obcaecati nemo ratione quis et quam.	
		</Text>
	</Wrapper>
}

export default Login