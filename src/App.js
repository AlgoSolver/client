// export { default as App } from './app';
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Route, Switch,useLocation } from "react-router-dom";


import Elements from "./pages/elements/";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import PasswordRecovery from "./pages/password-recover/";
import NewPassword from "./pages/new-password";

import Blog from "./pages/blog";
import NewPost from "./pages/new-post";
import Navbar,{AccountsNav} from "./components/navbar/";

export const theme = {
  colors: {
    primary: ["#3568d4", "#3e7bfa", "#6698fa", "#ccddff"],
    dark: ["#1c1c28", "#28293d", "#555770", "#8f90a6", "#c7c9d9"],
    light: ["#e4e4eb", "#ebebf0", "#f3f2f5", "#fafafc", "#ffffff"],
    red: ["#e53535", "#ff3b3b", "#ff5c5c", "#ff8080", "#ffe5e5"],
    green: ["#05a660", "#06c270", "#39d9ba", "#57EBA1", "#E3FFF1"],
    blue: ["#004FC4", "#0063F7", "#5B8DEF", "#9DBFF9", "#E5F0FF"],
    yellow: ["#E5B800", "#FFCC00", "#FDDD48", "#FDED72", "#FFFEE5"],
    orange: ["#E57A00", "#FF8800", "#FDAC42", "#FCCC75", "#FFF8E5"],
    teal: ["#00B7C4", "#00CFDE", "#73DFE7", "#A9EFF2", "#E5FFFF"],
    purple: ["#4D0099", "#6600CC", "#AC5DD9", "#DDA5E9", "#FFE5FF"],
  },
  gradients: [
    "linear-gradient(147.14deg, #5B8DEF 6.95%, #0063F7 93.05%)",
    "linear-gradient(147.14deg, #FF8800 6.95%, #E63535 93.05%)",
    "linear-gradient(147.14deg, #3E7BFA 6.95%, #6600CC 93.05%)",
    "linear-gradient(147.14deg, #00CFDE 6.95%, #05A660 93.05%)",
    "linear-gradient(145.51deg, #FDDD48 7.21%, #00B7C4 94.47%)",
    "linear-gradient(147.14deg, #FF3B3B 6.95%, #6600CC 93.05%)",
    "linear-gradient(147.14deg, #73DFE7 6.95%, #0063F7 93.05%)",
    "linear-gradient(145.51deg, #AC5DD9 7.21%, #004FC4 94.47%)",
  ],
  elevation: [
    {
      shadow: "inset 0px 0.5px 4px rgba(96, 97, 112, 0.32)",
      desc: "-01 (inset) Focused input forms",
    },
    {
      shadow: "none",
      desc:
        "00 (Base) Background, Alerts, Button disabled, Input Forms disabled ",
    },
    {
      shadow:
        "0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16)",
      desc: "01 Card, Pressed button, Progressive button",
    },
    {
      shadow:
        "0px 0px 1px rgba(40, 41, 61, 0.04), 0px 2px 4px rgba(96, 97, 112, 0.16)",
      desc: "02 Button, Notification badges",
    },
    {
      shadow:
        " 0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16)",
      desc: "03 Navigation Menu, Bar",
    },
    {
      shadow:
        "0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16)",
      desc: "04 Card Raised, Button Raised, Dropdown Menu",
    },
    {
      shadow:
        "0px 2px 8px rgba(40, 41, 61, 0.04), 0px 16px 24px rgba(96, 97, 112, 0.16)",
      desc: "05 Picker, Popover",
    },
    {
      shadow:
        "0px 2px 8px rgba(40, 41, 61, 0.08), 0px 20px 32px rgba(96, 97, 112, 0.24)",
      desc: "06 Modals, Dialogue",
    },
  ],
  breakpoints: {
    phone: "max-width: 37.5em", // 600px
    bigPhone: "max-width:46.0629em", // 769px;
    tabPort: "max-width: 56.25em", //900px
    tabLAnd: "max-width: 75em", //1200px
    bigDesktop: "min-width: 112.5em", //1800px
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routing />
      </Router>
    </ThemeProvider>
  );
}

const Routing = ()=>{
  const location = useLocation();
  return <>
    {location.pathname !== '/' ?( !location.pathname?.includes('accounts')  ? <Navbar /> : <AccountsNav />) : null}
     <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/accounts/login">
            <Login />
          </Route>
          <Route path="/accounts/signup">
            <Signup />
          </Route>
          <Route path="/accounts/recover">
            <PasswordRecovery />
          </Route>
           <Route path="/accounts/new-password/:token">
            <NewPassword />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/new-post">
            <NewPost />
          </Route>
          <Route path="/elements">
            <Elements />
          </Route>
        </Switch>
        </>
}

export default App;
