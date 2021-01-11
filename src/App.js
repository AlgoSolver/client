
// export { default as App } from './app';
import styled,{ThemeProvider} from 'styled-components'
import GlobalStyle from './GlobalStyle';
import {useDarkMode} from './shared/hooks/useDarkMode';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';

import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'

import Button from './components/button/';
import Navbar from './components/navbar/'


const light ={
	primary:'#005FF9',
	secondary:'#A5F469',
	secondary2:'#f7be4e',
    bg:' #E7E7E9',
    bg2:'#FFFFFF',
    bg3:'#CBCBCD',
    text:'#19191A',
    blur:'blur(15px) saturate(180%)',
    shadow:'0px 60px 80px rgba(15, 15, 15, 0.08), 0px 25.0666px 33.4221px rgba(15, 15, 15, 0.0575083), 0px 13.4018px 17.869px rgba(15, 15, 15, 0.0476886), 0px 7.51293px 10.0172px rgba(15, 15, 15, 0.04), 0px 3.99006px 5.32008px rgba(15, 15, 15, 0.0323114), 0px 1.66035px 2.21381px rgba(15, 15, 15, 0.0224916)',
    shadowHover:'0px 60px 80px rgba(15, 15, 15, 0.1), 0px 25.0666px 33.4221px rgba(15, 15, 15, 0.0775), 0px 13.4018px 17.869px rgba(15, 15, 15, 0.0277), 0px 7.51293px 10.0172px rgba(15, 15, 15, 0.06), 0px 3.99006px 5.32008px rgba(15, 15, 15, 0.0523), 0px 1.66035px 2.21381px rgba(15, 15, 15, 0.0425)',
}
const dark={
	bg:'#333',
	text:'#fff'
}

const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    min-width: 375px;
    min-height: 100vh;
`

function App() {
  const [theme,toggleTheme] = useDarkMode();
  console.log(theme);
  return (
  	<ThemeProvider theme={light}>
  	    <GlobalStyle />
        <Router>
        <Navbar />
    	    <Wrapper className="App">
          <Switch>
              <Route exact path="/">
      	         <Home />
              </Route>
               <Route exact path="/login">
                 <Login />
              </Route>
               <Route exact path="/signup">
                 <Signup />
              </Route>
          </Switch>
  	    </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
