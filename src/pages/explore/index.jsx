import Button from '../../components/button/';
import {Link} from 'react-router-dom';
import Box from '../../components/box/';
const Explore=()=>{
	return <div className="wrapper">
	  <div className="center">
	  	<Box 
  		m="4rem 0" 
  		width="30rem"
  		center
  		shadow={2}
  		radius="1rem"
  		height="20rem"
  		>
		 <Link to="/create-problem">
		 	<Button>
		 		Create Problem 
		 	</Button>
		 </Link>
		 </Box>
		</div>
	</div>
}


export default Explore;