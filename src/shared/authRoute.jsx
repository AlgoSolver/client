import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../hooks/user";

const AuthRoute = ({ privatePage = false, children, fallback, path }) => {
  const { data } = useAuth(false);
  if ((privatePage && data?.email) || (!privatePage && !data?.email)) {
    return <Route path={path}>{children}</Route>;
  }
  return <Redirect to={fallback} />;
};
export default AuthRoute;
