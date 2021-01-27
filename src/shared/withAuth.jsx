import { useFetch } from "./hooks/useFetch";
import Loading from "./loading";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../store/action-types/user";

const Wrapper = ({ children, error }) => {
  const user = useSelector((state) => state.auth);
  if (user?.notAuth || user?.email || error) return children;
  return <Loading />;
};
const WithAuth = ({ children }) => {
  const dispatch = useDispatch();
  const { res, request, error, loading } = useFetch();
  const checkAuth = async () => {
    try {
      await request("/user/auth", "get");
    } catch (err) {}
  };
  useEffect(() => {
    checkAuth();
  }, []);
  useEffect(() => {
    if (res?.email) {
      dispatch({
        type: auth,
        payload: res,
      });
    }
  }, [res]);
  // for dev
  return <Wrapper error>{children}</Wrapper>;
};
export default WithAuth;
