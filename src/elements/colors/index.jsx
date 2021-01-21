import styled from 'styled-components';
import {theme} from '../../App.js';
import Text from '../../components/Text/';
import {useEffect} from 'react';
const 	 ColorsContainer= styled.div`
	padding:2rem;
	.plate{
		display: flex;
		flex-wrap: wrap;

	}
	.cont{
		padding: 2rem;
		background:#fff;
		border-radius: 20px;
		margin:2rem 0;
	}
`

const ColorPlate = styled.div`
	.bg{
		padding:4rem;
	    border-radius: 2rem;
		background:${({color,gradient})=>gradient ? gradient : color};
	}
    	margin-right:2rem;
`

const Colors = ()=>{
	const renderPlate=(name)=>{
		if(name === 'gradient'){
			return <div className="cont">
		  <Text type="h3" transform="capitalize">{name}</Text>
		  <div className="plate">
           {theme.gradients.map((item,idx)=><ColorPlate gradient={item}  color={item}>
           	<div className="bg"></div>
           	 <Text type="h5">
           	 {name +'-'+ idx} <br />
           </Text>
           	</ColorPlate>)}
           
		  </div>
		</div>
		}
		return <div className="cont">
		  <Text type="h3" transform="capitalize">{name}</Text>
		  <div className="plate">
           {theme.colors[name].map((item,idx)=><ColorPlate   color={item}>
           	<div className="bg"></div>
           	 <Text type="h5">
           	 {name +'-'+ idx} <br />
           	 {item}
           </Text>
           	</ColorPlate>)}
           
		  </div>
		</div>

	}
	return <ColorsContainer>
	<Text type="h1" >Colors</Text>
	<div className="colors">
	  {renderPlate('primary')}
	  {renderPlate('dark')}
	  {renderPlate('light')}
	  {renderPlate('red')}
	  {renderPlate('green')}
	  {renderPlate('blue')}
	  {renderPlate('yellow')}
	  {renderPlate('orange')}
	  {renderPlate('teal')}
	  {renderPlate('purple')}
	  {renderPlate('gradient')}

	</div>
	</ColorsContainer>
}

export default Colors;