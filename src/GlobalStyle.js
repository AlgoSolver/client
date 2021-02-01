import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
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
      width: 100%;
      background: ${({ theme }) => theme.colors.light[0]};
      color: ${({ theme }) => theme.colors.dark[0]};
      transition: all 0.50s linear;
      margin:0;
      padding:0;
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
`;
