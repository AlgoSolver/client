import styled from 'styled-components';
import {motion} from 'framer-motion';
import classNames from "classnames";

const StyledText = styled.div`
	font-weight: 300;
	font-size:1.6rem;
	color:${(props)=>props.color ? props.theme[props.color]:props.theme.text };
	text-transform:${({transform})=>transform };
	font-family: ${({family})=>family };
	&.h1{
		font-size:5.3rem;
		line-height:1.15em;
		margin:1rem 0;
	}
	&.h2{
		font-size:3.6rem;
		line-height:1.5em;
		margin:1rem 0;
	}
	&.h3{
		font-size:2.5rem;
		line-height:1.5em;
		margin:1rem 0;
	}
	&.h4{
		font-size:1.8rem;
		line-height:1.5em;
		margin:1rem 0;
	}
	&.h5{
		font-size:1.7rem;
		line-height:1.55em;
		margin:1rem 0;
	}
	&.h6{
		font-size:1.3rem;
		line-height:1.5em;
		font-weight:500;
		margin:1rem 0;
	}
	&.p{
		font-size:1.4rem;
		margin: 0 0 10px;
		letter-spacing: normal;
	}
	&.bold{
		font-family: ${({family})=>family+'-Bold'};
	}
	&.size{
		font-size: ${({size})=>size} !important;
	}
	&.mg{
		margin:${({mg})=>mg};
	}
	&.pd{
		margin:${({pd})=>pd};
	}

`

const Text = ({
	children,
	type="h3",
	className,
	bold,
	color,
	size,
	family="Avenir",
	mg,
	pd,
	transform="initial"

})=>{
	const classes = classNames(
		className,
		bold && 'bold', 
		size && 'size',
		type,
		mg,
		pd
		)
	return <StyledText 
	className={classes} 
	as={type}
	family={family}
	size={size}
	mg={mg}
	pd={pd}
	color={color}
	transform = {transform}
	>
		{children}
	</StyledText>
}

export default Text;