import styled from 'styled-components';
import Button from '../../components/button/';
import Text from '../../components/Text/';
import {TwoUser,Activity} from '../../assets/icons/';

const ButtonsContainer = styled.div`
	padding:2rem;
    .body{
    	padding: 2rem;
    	background: #fff;
    	border-radius: 2rem;
    	display: flex;

    	align-items: center;
    	flex-wrap: wrap;
    	button{
    		margin:.8rem;
    	}
    }
`

const Buttons = ()=>{
	return <ButtonsContainer>
		<Text type="h1">
			Buttons
		</Text>
		<div className="body">
          <Button>
          	 Primary
          </Button>
           <Button theme="dark">
          	 Dark
          </Button >
           <Button theme="light">
          	light
          </Button>
           <Button theme="red">
          	 Red
          </Button>
          <Button theme="green">
          	 green
          </Button>
          <Button theme="blue">
          	 blue
          </Button>
          <Button theme="yellow">
          	 yellow
          </Button>
          <Button theme="orange">
          	 orange
          </Button>
          <Button theme="teal">
          	 teal
          </Button>
          <Button theme="purple">
          	 purble
          </Button>
		</div>
		<div className="body">
          <Button outlined>
          	 Primary
          </Button>
           <Button outlined  theme="dark">
          	 Dark
          </Button  >
           <Button outlined  theme="light">
          	light
          </Button >
           <Button outlined  theme="red">
          	 Red
          </Button >
          <Button outlined  theme="green">
          	 green
          </Button >
          <Button outlined  theme="blue">
          	 blue
          </Button >
          <Button outlined  theme="yellow">
          	 yellow
          </Button >
          <Button outlined  theme="orange">
          	 orange
          </Button >
          <Button outlined  theme="teal">
          	 teal
          </Button >
          <Button outlined  theme="purple">
          	 purble
          </Button >
		</div>
		<div className="body">
            <Button disabled>
          	 Disabled
          </Button>
		</div>
		<div className="body">
            <Button small>
          	 Small
          </Button>
           <Button>
          	 Meduim
          </Button>
          <Button big>
          	 Large
          </Button>
		</div>
		<div className="body">
		  <Button loading>
          	 
          </Button>
		</div>
		<div className="body">
		  <Button icon={TwoUser}>
          	  two freinds
          </Button>
          <Button icon={TwoUser} outlined theme="dark">
          	  activity freinds
          </Button>
		</div>
	</ButtonsContainer>
}
export default Buttons;