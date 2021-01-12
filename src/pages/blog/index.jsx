import styled from 'styled-components';
import Text from '../../components/Text/';
import BlogItem from '../../components/blog/';
import {Box} from '../../components/gate/'
import Button from '../../components/button/'
import {Link} from 'react-router-dom';

const BlogContainer = styled.div`
	width: 97rem;
	margin:3rem auto;
	.row{
		display: flex;
		width: 100%;
		&__board{
			flex:0 1 ${(8/12)*100}%;
            flex-direction: column;
            &__container{
			 display: flex;
             flex-direction: column;
             padding-right:1rem;
             > :not(:last-child){
             	margin-bottom:1.2rem;
             }           	
            }
            
		}
		&__sidebar{
			display: flex;
			flex:1;
            flex-direction: column;
		}
	}
`

const Blog = ()=>{
	return <BlogContainer>
		<div className="row">
			<div className="row__board">
               <Text 
               type="h3" 
               
               color="text"
               size="2.7rem"
               >
               	  Posts
               </Text>
               <div className="row__board__container">
               <BlogItem />
               <BlogItem />
               <BlogItem />
               <BlogItem />
               <BlogItem />
               </div>
			</div>
			<div className="row__sidebar">
                   <Box>
                     <Text 
                     type="h4"
                     color="bg2"
                      mg="0"
                     >
                     Want to write a post?
                     </Text>
                     <Text type="p" color="bg"  mg=".4rem 0 .8rem">
                      Share your Knowlege and write something you good at.
                     </Text>
                     <div style={{textAlign:'right'}}>
                     	<Link to="/new-post"><Button small>
                     		Write a post
                     	</Button>
                     	</Link>
                     </div>
                   </Box> 
			</div>
		</div>
	</BlogContainer>
}

export default Blog;