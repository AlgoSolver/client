import styled from 'styled-components';
import Button from '../button'
import {Link,useLocation} from 'react-router-dom';
const StyledNavbar = styled.div`
    &.navnormal{
    	.nav__container{
			box-shadow: 0 1.5rem 2rem -0.5rem rgba(0,0,0,0.07), 0 0.25rem 2rem 0 rgba(0,0,0,0.03);
			background:${({theme})=>theme.bg2};
			width:100%;
            .nav__body{
		     display: flex;
		     width: 100%;
		      max-width: 111.8rem;
		      margin: 0 auto;
	          }
		}
	}
    &.floatnav{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    margin-top:2rem;
	padding: 0rem 8rem;
	.nav__container{
			border-radius: .9rem;
			box-shadow: 0 1.5rem 2rem -0.5rem rgba(0,0,0,0.07), 0 0.25rem 2rem 0 rgba(0,0,0,0.03);
			background:${({theme})=>theme.bg2};		
		    max-width: 117rem;
			margin: 0 auto;
		}
		.nav__body{
	     display: flex;
	     width: 100%;
	}
    }
	.nav__brand{
		height: 6.4rem;
		display: flex;
		align-items: center;
		a{
			padding:0 2rem;
			span{
				display:inline-block;
				margin-right:8rem;
                font-family: 'Avenir';
                font-weight: 700;
                font-size:2.5rem;
			}
		}

		
	}
    .menu{
		display:flex;
		flex:1;
		justify-content: space-between;
		align-items: center;
		list-style-type: none;
		&__links{
			display: flex;
			align-items: center;
			flex:1;
			justify-content: center;
		   

			
		}
		&__link{
			color:${({theme})=>theme.text};
			border-radius: .5rem;
			height:3.2rem;
			padding-left:1.6rem;
			padding-right: 1.6rem;
			transition: background-color 0.2s ease, color 0.2s ease;
			font-size:1.4rem;
			font-weight: 600;
			text-transform: capitalize;
			font-family: 'Avenir';
			margin:0 .4rem;
		    display: flex;
		    justify-content:center;
		    align-items: center;
		    &:hover{
		    	background:${({theme})=>theme.bg};
		    };
		}
		&__buttons{
          display: flex;
          align-items: center;
          margin-right:2rem;
         .login{
             margin-right:1.6rem;
          }
		}
	}
	
`

const Navbar = () =>{
	const location = useLocation();
	console.log(location);
	return <StyledNavbar className={`nav ${location.pathname === '/' ? "floatnav" :'navnormal'}`}>
		<div className="nav__container">
			<nav className="nav__body">
              <div className="nav__brand">
                 <a href=""><span>AlgoSolver</span></a>
              </div>
              <ul className="menu">
              	<div className="menu__links">
	              	    <li className="menu__item"><a href="#" className="menu__link">Explore</a></li>	
	      	  			<li className="menu__item"><a href="#" className="menu__link">Playground</a></li>
	      	  			<Link to="/blog"><li className="menu__item"><a href="#" className="menu__link">Blog</a></li></Link>	
	      	  			<li className="menu__item"><a href="#" className="menu__link">Abouts us</a></li>	
	      	  			<li className="menu__item"><a href="#" className="menu__link">Contact</a></li>		
              	</div>
              	<div className="menu__buttons">
                    <li className="menu__item login">
	                    <Link to="/login">
		                    <Button small>
		                       Log in
		                    </Button>
		                </Link>
                    </li>	
                    <li className="menu__item">
                        <Link to="/signup">
		                    <Button outlined small>
		                       Sign in
		                    </Button>
		                </Link>
                    </li>	
              	</div>
              </ul>
			</nav>
		</div>
	</StyledNavbar>
}
export default Navbar;