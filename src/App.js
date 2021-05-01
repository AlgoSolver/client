// export { default as App } from './app';
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import Elements from "./pages/elements/";
import Home from "./pages/home";
import Login from "./pages/login";
import ActivateAccount from "./pages/activate-account/";
import Profile from "./pages/profile/";
import Explore from "./pages/explore/";
import Problems from "./pages/problems/";
import Playground from "./pages/playground/";
import Problem from "./pages/problem/";
import Signup from "./pages/signup";
import PasswordRecovery from "./pages/password-recover/";
import NewPassword from "./pages/new-password";
import UserSubmissions from "./pages/user-submissions";
import UserPlaygrounds from "./pages/user-playgrounds";

import Submission from "./pages/submission";

import Blog from "./pages/blog";
import NewPost from "./pages/new-post";

import CreateProblem from "./pages/create-problem/";

import Navbar, { AccountsNav } from "./components/navbar/";
import AuthRoute from "./shared/authRoute";
import WithAuth from "./shared/withAuth";
import { theme } from "./utils/theme";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Toaster />
      <Router>
        <WithAuth>
          <Routing />
        </WithAuth>
      </Router>
    </ThemeProvider>
  );
}

const Routing = () => {
  const location = useLocation();
  const fallbackForPublic = "/";
  const fallbackForPrivate = "/explore"; // until estblish the main page of signed user
  return (
    <>
      {location.pathname !== "/" ? (
        !location.pathname?.includes("accounts") ? (
          <Navbar />
        ) : (
          <AccountsNav />
        )
      ) : null}
      <Switch>
        <AuthRoute fallback={fallbackForPrivate} exact="exact" path="/">
          <Home />
        </AuthRoute>
        <AuthRoute fallback={fallbackForPrivate} path="/accounts/login">
          <Login />
        </AuthRoute>
        <AuthRoute fallback={fallbackForPrivate} path="/accounts/signup">
          <Signup />
        </AuthRoute>
        <AuthRoute fallback={fallbackForPrivate} path="/accounts/recover">
          <PasswordRecovery />
        </AuthRoute>
        <AuthRoute
          fallback={fallbackForPrivate}
          path="/accounts/new-password/:token"
        >
          <NewPassword />
        </AuthRoute>
        <AuthRoute
          fallback={fallbackForPrivate}
          path="/accounts/activate-account/:token"
        >
          <ActivateAccount />
        </AuthRoute>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/submission/:id">
          <Submission />
        </Route>
        <Route exact path="/playground/new/empty">
          <Playground />
        </Route>
        <Route exact path="/playground/:id">
          <Playground />
        </Route>
        <Route exact path="/:username/submissions">
          <UserSubmissions />
        </Route>
        <Route exact path="/:username/playgrounds">
          <UserPlaygrounds />
        </Route>
        <Route path="/problems/:id">
          <Problem />
        </Route>
        <Route path="/problems">
          <Problems />
        </Route>
        <AuthRoute
          privatePage={true}
          fallback={fallbackForPublic}
          path="/new-post"
        >
          <NewPost />
        </AuthRoute>
        {/* <AuthRoute
          // privatePage={true}

          // fallback={fallbackForPublic}
          path="/create-problem"
        > */}
        <Route path="/create-problem">
          <CreateProblem />
        </Route>
        {/* </AuthRoute> */}
        <Route exact path="/elements">
          <Elements />
        </Route>
        <Route exact path="/explore">
          <Explore />
        </Route>
        <AuthRoute
          privatePage={true}
          fallback={fallbackForPublic}
          path="/:username"
        >
          <Profile />
        </AuthRoute>
      </Switch>
    </>
  );
};

export default App;
