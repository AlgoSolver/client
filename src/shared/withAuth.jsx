 import Loading from "./loading";

 import {useAuth} from '../hooks/user';
// const Wrapper = ({ children, error }) => {
//   const user = useSelector((state) => state.auth);
//   if (user?.notAuth || user?.email || error) return children;
//   return <Loading />;
// };
const WithAuth = ({ children }) => {
  const {data,isError} = useAuth();
  if(data?.notAuth || data?.email || isError)
  return children;
 return <Loading />
};

 // const dispatch = useDispatch();
  // const { res, request, error, loading } = useFetch();
  // const checkAuth = async () => {
  //   try {
  //     await request("/user/auth", "get");
  //   } catch (err) {}
  // };
  // useEffect(() => {
  //   checkAuth();
  // }, []);
  // useEffect(() => {
  //   if (res?.email) {
  //     dispatch({
  //       type: auth,
  //       payload: res,
  //     });
  //   }
  // }, [res]);
  // // for dev
export default WithAuth;
