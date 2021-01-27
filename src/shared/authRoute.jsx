import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoute = ({ privatePage = false, children, fallback, path }) => {
  const user = useSelector((state) => state.auth);
  if ((privatePage && user?.email) || (!privatePage && !user?.email)) {
    return <Route path={path}>{children}</Route>;
  }
  return <Redirect to={fallback} />;
};
export default AuthRoute;
