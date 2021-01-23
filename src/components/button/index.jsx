import styled,{keyframes} from 'styled-components';
import classNames from "classnames";

const types = ['primary', 'green', 'purple', 'teal', 'red','dark','blue']

const StyledButton = styled.button `
    
    font-size: 1.6rem;
    line-height: 1.6;
    background: ${({theme,type})=>type === 'light' ?theme.colors[type][4] :theme.colors[type][1]} ;
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
     &.circle{
          border-radius:1.9rem;
        }
    &.big{
        height: 4.8rem;
        &.circle{
          border-radius:2.4rem;
        }
    }
    svg{
      path{
         transition: all 200ms ease-in-out;
      }
    }
    &.small{
      height:3.2rem;
      font-size:1.4rem;
      font-family:'Avenir';
       &.circle{
          border-radius:1.6rem;
        }
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
           color: ${({theme,type})=>type === 'light' ? theme.colors.dark[0] : theme.colors[type][1]};
           background: ${({theme,type})=>theme.colors[type][3]};
           border-color:  ${({theme,type})=>theme.colors[type][3]};
           path{
             stroke:${({theme,type})=>type === 'light' ? theme.colors.dark[0] : theme.colors[type][1]} !important;
           }
         }
        
         &:active{
           background: ${({theme,type})=>theme.colors[type][4 ]};
           border-color:  ${({theme,type})=>theme.colors[type][2]};
           box-shadow:${({theme})=>theme.elevation[2].shadow};
         }
          &:focus{
           border-color:  ${({theme,type})=>theme.colors[type][0]};
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
    &.text{
      background:transparent;
       border:0;
       display: inline;
       color:${({color,theme})=>color ? color : theme.colors.dark[1]};
       box-shadow: none;
       &:hover{
        background: ${({theme,type})=>theme.colors.primary[3]};
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
     .icon{
      margin-left: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &.flex{
     display: inline-flex;
      align-items: center;
      justify-content: center;
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
    text,
    color=null,
    icon=null,
    scale = true,
    iconsize='2.4rem',
    iconfill='#1c1c28',
    ...rest
}) => {
  console.log(color)
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
        disabled && 'disabled',
        text && 'text',
        icon && 'flex',
        color && 'color'
    );

    return <StyledButton
  style={style}
  className={classes}
  type={theme}
  layer={color}
  disabled={disabled || loading}
  {...rest}
  >
    {!loading ? (icon ? <>
      {children} <span className="icon">{icon({iconsize,iconfill})}</span>
      </> : children ) : <span className="center"> <LoadingState type={theme}/></span> } 

  </StyledButton>
}
export default Button;