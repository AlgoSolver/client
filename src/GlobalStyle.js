import { createGlobalStyle } from "styled-components";

import AvenirRegular from "./assets/fonts/avenir_ff/Avenir-Regular.woff2";
import AvenirBold from "./assets/fonts/avenir_ff/AvenirLTStd-Black.woff2";
import DroidSerifRegular from "./assets/fonts/DroidSerif/DroidSerif-Regular.woff2";
import DroidSerifBold from "./assets/fonts/DroidSerif/DroidSerif-Bold.woff2";
import HelveticRegular from "./assets/fonts/Helveica/HelveticaNeueCyr.woff2";
import HelveticBold from "./assets/fonts/Helveica/HelveticaNeueCyr-Heavy.woff2";
import MonoLisaRegular from "./assets/fonts/MonoLisa/MonoLisa.woff2";
import MonoLisaBold from "./assets/fonts/MonoLisa/MonoLisa-Bold.woff2";
import LinotteRegular from "./assets/fonts/Linotte/Linotte-Regular.woff2";
import LinotteBold from "./assets/fonts/Linotte/Linotte-Bold.woff2";

export default createGlobalStyle`
  @font-face {
    font-family: 'Avenir';
    src: url(${AvenirRegular}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Avenir-Bold';
    src: url(${AvenirBold}) format('woff2');
    font-weight: 300;
   font-style: normal;
  }
  @font-face {
    font-family: 'Droid';
    src: url(${DroidSerifRegular}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Droid-Bold';
    src: url(${DroidSerifBold}) format('woff2');
    font-weight: 300;
   font-style: normal;
  }
  @font-face {
    font-family: 'Helvetic';
    src: url(${HelveticRegular}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Helvetic-Bold';
    src: url(${HelveticBold}) format('woff2');
    font-weight: 300;
   font-style: normal;
  }
   @font-face {
    font-family: 'MonoLisa';
    src: url(${MonoLisaRegular}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'MonoLisa-Bold';
    src: url(${MonoLisaBold}) format('woff2');
    font-weight: 300;
   font-style: normal;
  }
  @font-face {
    font-family: 'Linotte';
    src: url(${LinotteRegular}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Linotte-Bold';
    src: url(${LinotteBold}) format('woff2');
    font-weight: 300;
   font-style: normal;
  }
  html{
    font-size:62.5%;
  }
  *,
  *::after,
  *::before{
    padding:0;
    margin:0;
    box-sizing:border-box;
  }

    body{
    font-family: -apple-system, BlinkMacSystemFont,'Avenir', 'Helveica' , 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';     -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-overflow-scrolling: touch;
      min-width: 375px;
      min-height:100vh;
      width: 100%;
      background: ${({ theme }) => theme.colors.light[0]};
      color: ${({ theme }) => theme.colors.dark[0]};
      transition: all 0.50s linear;
      margin:0;
      padding:0;
      > #root{
        height:100%;
      }
    }

    a{
      text-decoration:none;
      outline:none;
      color:inherit;
    }
    form{
      width:100%;
    }
    button{
      border:none;
      cursor:pointer;
      outline:none;
    }
    .center{
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .wrapper{
      position: relative;
      overflow: hidden;
      width: 100%;
      min-width: 375px;
      position:relative;
      width:100%;
      max-width: 1200px;
      margin:0 auto;
      padding: 0px 2rem;
      height:100%;
    }
    .line{
      display:flex;
      align-item:center
    }
    .circle{
      border-radius:99999px;
    }
    .link{
      color:${({ theme }) => theme.colors.blue[0]};
      &:hover{
        text-decoration:underline;
      }
    }
`;
