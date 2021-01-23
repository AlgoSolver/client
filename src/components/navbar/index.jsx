import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../button/";
import { useMediaQuery } from "react-responsive";
import {useState} from 'react';
import { motion, AnimatePresence } from "framer-motion"

const NavbarContainer = styled(motion.nav)`
  background: ${({ theme }) => theme.colors.light[4]};
  box-shadow:{({ theme }) => theme.elevation[4].shadow}

  .wrappe{
  	display: flex;
	align-items: center;
	padding: 0 2rem;
	height:6.4rem;
  }
  .nav {
    &__brand {
      margin-right: 4rem;
      font-size: 3rem;
      font-family:'Linotte-bold';
      color: ${({ theme }) => theme.colors.dark[0]};
    }
    &__links {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__list {
      list-style-type: none;
      display: flex;
      align-items: center;
      &.list1 {
        flex: 1;
        justify-content: flex-start;
      }
    }
    &__item:not(:last-child) {
      margin-right: 1rem;
    }
    &__link {
      padding: 1rem 1rem;
      font-size: 1.6rem;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.dark[2]};
      transition: background 0.2s ease, color 0.2s ease;
      border-radius: 1rem;
      &:hover {
        color: ${({ theme }) => theme.colors.dark[0]};
      }
    }
  }
  .menu{
    flex:1;
    justify-content:flex-end;
    display:flex;
    .landing{
      position:fixed;
      top:0;
      left:0;
      bottom:0;
      right:0;
      background:rgba(0,0,0,.3);
      height:100vh;
      z-index: 5;
    }
     &__container{
        width:70vw;  
        backdrop-filter: blur(15px) saturate(180%);
        background: rgba(40, 44, 71, 0.76);
         
      }
      &__body{
         min-height:100vh;
         overflow-y:auto;
         display:flex;
         justify-content:space-between;
         flex-direction:column;
      }
      &__list{
       display:flex;
       flex-direction:column;
       width:100%;
       padding:2rem;
       list-style-type: none;
      }
      &__item:not(:last-child){
        margin-bottom:1rem;
      }
      &__link{
        font-size:1.6rem;
        color:${({theme})=>theme.colors.light[4]};
        text-transform:capitalize;
        padding:1rem 1rem 1rem 2rem;
        width:100%;
        display:inline-block;
        border-radius:1rem;
        transition: background 0.2s ease, color 0.2s ease;
        &:hover{
          background:${({theme})=>theme.colors.light[4]};
          color:${({theme})=>theme.colors.dark[0]};
        }
      }
    &__icon{
      .nav-icon-5{
        z-index: 20;
        width: 35px;
        height: 30px;
        margin: 10px 10px;
        position: relative;
        cursor: pointer;
        display: inline-block;
      }

      .nav-icon-5 span{
        background-color:${({theme})=>theme.colors.dark[0]};
        position: absolute;
        border-radius: 2px;
        transition: .3s cubic-bezier(.8, .5, .2, 1.4);
        width:100%;
        height: 4px;
        transition-duration: 500ms
      }
      .nav-icon-5 span:nth-child(1){
        top:0px;
        left: 0px;
      }
      .nav-icon-5 span:nth-child(2){
        top:13px;
        left: 0px;
        opacity:1;
      }
      .nav-icon-5 span:nth-child(3){
        bottom:0px;
        left: 0px;
      }
      .nav-icon-5:not(.open):hover span:nth-child(1){
        transform: rotate(-3deg) scaleY(1.1);
      }
      .nav-icon-5:not(.open):hover span:nth-child(2){
        transform: rotate(3deg) scaleY(1.1);
      }
      .nav-icon-5:not(.open):hover span:nth-child(3){
        transform: rotate(-4deg) scaleY(1.1);
      }
      .nav-icon-5.open span:nth-child(1){
        transform: rotate(45deg);
        top: 13px;
      }
      .nav-icon-5.open span:nth-child(2){
        opacity:0;
      }
      .nav-icon-5.open span:nth-child(3){
        transform: rotate(-45deg);
        top: 13px;
      }
    }
  }
`



const Navbar = () => {
  const isBigPhone = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <NavbarContainer 
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      >
      <div className="wrappe">
      <div className="nav__brand"><Link to="/">algoSlover</Link></div>
      {isBigPhone ? <NavMenu />: <div className="nav__links">
        <ul className="nav__list list1">
          <li className="nav__item">
            <Link to="/playground" className="nav__link">playground</Link>
          </li>
          <li className="nav__item">
            <Link to="/explore" className="nav__link">explore</Link>
          </li>
          <li className="nav__item">
            <Link to="/blog" className="nav__link">Blog</Link>
          </li>
          <li className="nav__item">
            <Link to="/elements" className="nav__link">elements</Link>
          </li>
        </ul>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/login" className="nav__link">Login</Link>
          </li>
          <li className="nav__item">
            <Link to="/signup">
              <Button
                big
               
                circle
                style={{
                  height: " 4.8rem",
                  padding: "0 2.4rem",
                  marginLeft: "2rem",
                }}
                theme="primary"
              >
                Signup
              </Button>
            </Link>
          </li>
        </ul>
      </div>}
      </div>
    </NavbarContainer>
  );
};

const NavMenu = ()=>{
  const [isMenuOpen , setIsMenuOpen] =useState(false);

  return <div className="menu">
    <div className="menu__icon">
      <div onClick={()=>setIsMenuOpen(e=>!e)} class={`icon nav-icon-5 ${isMenuOpen ?'open': null}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
   <AnimatePresence>{ isMenuOpen && <div 
       initial={{ opacity: 0 }}
      animate={{  opacity: 1 }}
      exit={{opacity: 0 }} 
    className="landing" onClick={()=>setIsMenuOpen(false)}>
    <motion.nav 
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }} 
      className="menu__container" onClick={(e)=>e.stopPropagation()}>
      <div className="menu__body">
      <ul className="menu__list list1">
          <li className="menu__item">
            <Link to="/playground" className="menu__link">playground</Link>
          </li>
          <li className="menu__item">
            <Link to="/explore" className="menu__link">explore</Link>
          </li>
          <li className="menu__item">
            <Link to="/blog" className="menu__link">Blog</Link>
          </li>
          <li className="menu__item">
            <Link to="/elements" className="menu__link">elements</Link>
          </li>
        </ul>
        <ul className="menu__list">
          <li className="menu__item">
            <Link to="/login" className="menu__link">login</Link>
          </li>
          <li className="menu__item">
            <Link to="/signup" className="menu__link">signup</Link>
          </li>
        </ul>
        </div>

    </motion.nav>
  </div>}  </AnimatePresence>

  </div>
}
export default Navbar;