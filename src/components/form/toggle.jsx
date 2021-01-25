import styled from "styled-components";
import { motion } from "framer-motion";

const Unit = styled(motion.div)`
  position: relative;
  margin-bottom: 1.5rem;
  .toggle{
    display:flex;
    align-items:center;
    &__content{
      flex:1;
      font-size:1.5rem;
      font-weight:400;
      padding-right:1rem;
      color:${({theme})=>theme.colors.dark[1]};
    }
    &__container{
      input{
        display:none;
         &:checked ~ label{
        background: ${({ theme,color }) => color ? theme.colors.[color][1]: theme.colors.primary[1]};
        &::after{
          background-color: white;
          transform: translateX(1.9rem);
        }
      } 
      }
      label{
      background:${({theme})=>theme.colors.dark[4]};
      width:4.5rem;
      height:2.6rem;
      display:flex;
      align-items:center;
      border-radius:5.2rem;
      transition:all .3s ease-in-out;
      cursor:pointer;
  
      &::after{
        content: "";
        padding-top: 3px;
        width: 20px;
        height: 20px;
        position: relative;
       
        left: 3px;
        background-color: white;
        display: block;
        border-radius: 50%;
        transition: all 0.15s ease 0s;
        opacity: 1;
      }
      }
    }
  }
`;


export const Toggle = ({children,color,name})=>{
  return <Unit color={color}>
    <div className="toggle">
      <div className="toggle__content">
        {children}
      </div>
      <div className="toggle__container">
        <input type="checkbox" class="form__toggle" id={name} />
          <label for={name} class="toggle__label ios">
      </label>
      </div>
    </div>
  </Unit>
}