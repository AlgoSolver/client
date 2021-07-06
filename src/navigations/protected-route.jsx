import {Route, Navigate} from "react-router-dom";
import {useAuth} from '../hooks/user'

// const Unauthrized = 

const ProtectedRoute = ({
	element,
	path,
	includedRoutes=[],
})=> {
	const auth = useAuth();
	console.log(auth?.data?.role && includedRoutes.includes(auth.data.role))
	return   <Route path={path} element={ auth?.data?.role && includedRoutes.includes(auth.data.role)? element : <Navigate  to="/unauthorized" />  } /> 
}

export default ProtectedRoute;