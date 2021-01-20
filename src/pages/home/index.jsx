import styled from 'styled-components';
import hero from '../../assets/images/hero.svg';
import code from '../../assets/images/code2.png';
import Button from '../../components/button/';
const HeroSection = styled.section`
	background-color:${(props)=>props.theme.bg2};
    padding: 18rem 0 14rem;
    &::before{
    	content: '';
	    display: block;
	    width: 3500px;
	    height: 1000px;
	    background:${(props)=>props.theme.bg2} url(${hero}) 50% 100% no-repeat;
	    background-size: cover;
	    position: absolute;
	    top: 0;
	    left: 50%;
	    transform: translateX(-50%);
    }
    .container{
    	position: relative;
    	z-index: 10;
    	width: 100%;
	    max-width: 1130px;
	    padding: 0 20px;
	    margin: 0 auto;
	    &__row{
	    	display: flex;
	    	align-items: center;
	    	justify-content: center;
	    	.intro{
	    		width:60rem; 
	    		text-align: center;
	    		&__title{
	    			color:${({theme})=>theme.bg2};
	    			font-weight: 700;
	    			font-size:5rem;
	    			font-family: 'Avenir-Bold';
	    			margin-bottom: 3rem;
	    			span{
	    				font-weight: bold;
	    				color:${({theme})=>theme.primary};
	    			}
	    		}
	    		&__subtitle{
	    			color:${(props)=>props.theme.bg};
	    			font-size:1.5rem;
	    			font-weight: 300;
	    			line-height: 2;
	    			letter-spacing: .03rem;
	    			text-transform: capitalize;
	    			font-family: 'Avenir';
	    			margin-bottom:2rem;


	    		}
	    	}
	    }
    }
`

const Img = styled.img`
	width: 3500px;
	    height: 1000px;
`


const Hero = ()=>{
	return <HeroSection>
	<div className="container">
	   <div className="container__row">
	        <div className="intro">
	        	<h1 className="intro__title">
	        		Leverage Your <span>
	        		Computer Programming
	        		</span> Skills
	        	</h1>
	        	<p className="intro__subtitle">
	               Algo solver was designed to help you to get sharp
	               with algoritm, data structures, pattern techniques and more. 
	        	</p>
	        	<Button big block>
	        	   Make An Account
	        	</Button>
	        </div>
       </div>
    </div>  
	</HeroSection>
}

export default Hero;