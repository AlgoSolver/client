import {createGlobalStyle} from 'styled-components';

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
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	    -webkit-overflow-scrolling: touch;
	    min-width: 375px;
	    width: 100%;
    	background: ${({theme})=>theme.bg};
    	color: ${({theme})=>theme.text};
    	transition: all 0.50s linear;
    	mrgin:0;
    	padding:0;
    	min-heigth:1000px;
    }

    a{
    	text-decoration:none;
    	outline:none;
    	color:inherit;
    }

    button{
    	border:none;
    	cursor:pointer;
    	outline:none;
    }
`