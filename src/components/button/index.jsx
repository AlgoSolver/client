import styled from 'styled-components';
import classNames from "classnames";

const types = ['primary','secondary2','text']

const StyledButton = styled.button`
	display: inline-block;
	font-size: 1.6rem;
	line-height: 1.6;
    background: ${({theme})=>theme.primary};
    color: #fff;
    border-radius: 1rem;
    padding: 5px 14px 6px;
    font-weight: 600;
    box-shadow:${({theme})=>theme.shadow};
    transition: transform 200ms ease-in-out;
    font-family: 'MonoLisa';
    letter-spacing: 0.03rem;
    &.big{
        padding: 12px 26px;
    }
    &.small{
      padding:0 1.6rem;
      height:3.2rem;
      font-size:1.4rem;
      font-family:'Roboto';
      border-radius: .5rem;
    }
    &.contained{
         background: ${(props)=>props.theme[props.type]};
         color:${({theme,type})=>types.some((item)=>type===item) ? theme.bg2 : theme.text};
         border: 2px solid ${(props)=>props.theme[props.type]};
    }
    &.outlined{
       background:transparent;
       border: 2px solid ${(props)=>props.theme[props.type]};
       color:${(props)=>props.theme[props.type]};
    }
    &.squared{
    	border-radius: 0;
    }
    &.block{
    	display: block;
    	width:100%;
    }

    &.scaling{
    &:hover{
    	transform: scale(1.03);
        }
    &:active{
    	 transform: scale(.9);
        }
    }
}
` 
const Button = ({
	 children,
	 disabled,
	 big,
	 theme="primary",
	 block,
	 outlined,
	 text,
	 squared,
	 circle,
	 style={},
	 className,
	 loading,
   small,
	 scale=true
	})=>{
	 const classes = classNames(
      className,
      `${outlined ? "outlined":text ? "text" : "contained"}`,
      big && "big",
      small && "small",
      squared && "squared",
      block && "block",
      circle && "circle",
      loading && "loading",
      scale && 'scaling'
    );

	return <StyledButton
	style={style}
	className={classes}
	type={theme}
	>
	{children}
	</StyledButton>
}
export default Button;