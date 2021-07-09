// export { default as App } from './app';
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/navbar/";
import Message from './components/message/'
import { useAuth } from "./hooks/user";
import Loading from "./shared/loading";
import Navigations from './navigations/';
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const { data : user,isLoading,isError,error } = useAuth();
  console.log(user);
  if(isLoading) return <Loading />
  if(isError) return <Message subTitle={error.messgae} />  
  return (
      <Router>
      <ErrorBoundary>
      <div className="app-container">
        <header className="app-container__up">
          <Navbar />
        </header>
        <main className="app-container__middle">
          <Navigations user={user} />
        </main>
        <footer className="app-container__down">

        </footer>
      </div>
      </ErrorBoundary>
      </Router>
  );
}

// const Routing = () => {
//   const location = useLocation();
//   const fallbackForPublic = "/";
//   const fallbackForPrivate = "/explore"; // until estblish the main page of signed user
//   return (
//     <>
//       {location.pathname !== "/" ? (
//         !location.pathname?.includes("accounts") ? (
//           <Navbar />
//         ) : (
//           <AccountsNav />
//         )
//       ) : null}
//       <Switch>
//         <AuthRoute fallback={fallbackForPrivate} exact="exact" path="/">
//           <Home />
//         </AuthRoute>
//         <AuthRoute fallback={fallbackForPrivate} path="/accounts/login">
//           <Login />
//         </AuthRoute>
//         <AuthRoute fallback={fallbackForPrivate} path="/accounts/signup">
//           <Signup />
//         </AuthRoute>
//         <AuthRoute fallback={fallbackForPrivate} path="/accounts/recover">
//           <PasswordRecovery />
//         </AuthRoute>
//         <AuthRoute
//           fallback={fallbackForPrivate}
//           path="/accounts/new-password/:token"
//         >
//           <NewPassword />
//         </AuthRoute>
//         <AuthRoute
//           fallback={fallbackForPrivate}
//           path="/accounts/activate-account/:token"
//         >
//           <ActivateAccount />
//         </AuthRoute>
//         <Route path="/blog">
//           <Blog />
//         </Route>
//         <Route path="/submission/:id">
//           <Submission />
//         </Route>
//         <Route exact path="/playground/new/empty">
//           <Playground />
//         </Route>
//         <Route exact path="/playground/:id">
//           <Playground />
//         </Route>
//         <Route exact path="/:username/submissions">
//           <UserSubmissions />
//         </Route>
//         <Route exact path="/:username/playgrounds">
//           <UserPlaygrounds />
//         </Route>
//         <Route path="/problems/:id">
//           <Problem />
//         </Route>
//         <Route path="/problems">
//           <Problems />
//         </Route>
//         <AuthRoute
//           privatePage={true}
//           fallback={fallbackForPublic}
//           path="/new-post"
//         >
//           <NewArticle />
//         </AuthRoute>
//         {/* <AuthRoute
//           // privatePage={true}

//           // fallback={fallbackForPublic}
//           path="/create-problem"
//         > */}
//         <Route path="/create-problem">
//           <CreateProblem />
//         </Route>
//         {/* </AuthRoute> */}
//         <Route exact path="/elements">
//           <Elements />
//         </Route>
//         <Route path="/practise">
//           <Practise />
//         </Route>
//         <AuthRoute
//           privatePage={true}
//           fallback={fallbackForPublic}
//           path="/:username"
//         >
//           <Profile />
//         </AuthRoute>
//       </Switch>
//     </>
//   );
// };

export default App;
