import styled,{keyframes} from 'styled-components';
import classNames from "classnames";

const types = ['primary', 'green', 'purple', 'teal', 'red','dark','blue']

const StyledButton = styled.button `
    
    font-size: 1.6rem;
    line-height: 1.6;
    background: ${({theme,type})=>theme.colors[type][1]};
    color: #fff;
    border-radius: .6rem;
    padding: 0 1.6rem 0;
    height:3.8rem;
    min-width:8rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    box-shadow:${({theme})=>theme.elevation[3].shadow};
    transition: all 200ms ease-in-out;
    font-family: 'Avenir';
    letter-spacing: 0.02rem;
    border: 2px solid ${(props)=>props.theme.colors[props.type][1]};
    &.big{
        height: 4.8rem;
    }
    .icon{
      margin-right: 1rem;
      display: flex;
    align-items: center;
    justify-content: center;

    }
    &.small{
      height:3.2rem;
      font-size:1.4rem;
      font-family:'Avenir';
    }
    &.contained{
         color:${({theme,type})=>types.some((item)=>type===item) ? theme.colors.light[4] : theme.colors.dark[0] };
         &:hover{
           background: ${({theme,type})=>theme.colors[type][2]};
           border-color:  ${({theme,type})=>theme.colors[type][2]};
         }
        
         &:active{
           background: ${({theme,type})=>theme.colors[type][0]};
           border-color:  ${({theme,type})=>theme.colors[type][0]};
           box-shadow:${({theme})=>theme.elevation[2].shadow};
         }
          &:focus{
           border-color:  ${({theme,type})=>theme.colors[type][4] || theme.colors[type][3]};
           border-radius: .7rem;
         }
         .icon{
           svg{
      path{
        stroke:${({theme,type})=>types.some((item)=>type===item) ? theme.colors.light[4] : theme.colors.dark[0] };
      }
    }
         }
    }
    &.outlined{
       background:transparent;
       color:${({theme,type})=>theme.colors[type][1]};
       border-color:  ${({theme,type})=>theme.colors[type][3]};
       &:hover{
           background: ${({theme,type})=>theme.colors[type][3]};
           border-color:  ${({theme,type})=>theme.colors[type][3]};
         }
        
         &:active{
           background: ${({theme,type})=>theme.colors[type][4 ]};
           border-color:  ${({theme,type})=>theme.colors[type][2]};
           box-shadow:${({theme})=>theme.elevation[2].shadow};
         }
          &:focus{
           border-color:  ${({theme,type})=>theme.colors[type][0]};
           border-radius: .7rem;
         }

        .icon{
           svg{
      path{
        stroke:${({theme,type})=>theme.colors[type][1]};
      }
    }
         }
    }
    &.link{
       background:transparent;
       border:0;
       text-decoration: underline;
       display: inline;
       color:${({color,theme})=>color ? color : theme.colors.blue[1]};
       box-shadow: none;
       padding:0;
       font-size:1.2rem;
       &:hover{
        text-decoration: none;
       }

    }
    &.squared{
      border-radius: 0;
    }
    &.block{
      display: block;
      width:100%;
    }
    &.disabled{
      background: ${({theme,type})=>theme.colors.light[0]} !important;
      color:${({theme,type})=>theme.colors.dark[4]} !important;
      box-shadow: none;
      border-color: ${({theme,type})=>theme.colors.light[0]} !important;
      cursor: not-allowed !important;
    }
    &.loading{
        background: ${({theme,type})=>theme.colors.light[0]} !important;
        border-color: ${({theme,type})=>theme.colors.light[0]} !important;
        cursor: normal !important;
    }
}
`

const donutSpin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const LoadingState = styled.span`
  display: inline-block;
    border: 4px solid ${({theme,type})=>theme.colors.dark[4]};;
    border-left-color: ${({theme,type})=>theme.colors.dark[1]};
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: ${donutSpin} .8s linear infinite;
`
const Button = ({
    children,
    disabled,
    big,
    theme = "primary",
    block,
    outlined,
    link,
    squared,
    circle,
    style = {},
    className,
    loading,
    small,
    icon=null,
    scale = true,
    iconSize='2.4rem',
    iconFill='#1c1c28'
}) => {
    const classes = classNames(
        className,
        `${outlined ? "outlined":link ? "link" : "contained"}`,
        big && "big",
        small && "small",
        squared && "squared",
        block && "block",
        circle && "circle",
        loading && "loading",
        scale && 'scaling',
        disabled && 'disabled'
    );

    return <StyledButton
  style={style}
  className={classes}
  type={theme}
  disabled={disabled || loading}
  >
    {icon && <span className="icon" >{icon({iconSize,iconSize})}</span>}

  <span className="center"> {!loading  ? children : <LoadingState type={theme}/>} </span> 
  </StyledButton>
}
export default Button;