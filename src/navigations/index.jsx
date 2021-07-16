import routes from "./init-routes.js";
import { Navigate, useRoutes } from "react-router-dom";


const renderRoutes = (role,username)=>{
	return routes.map(route=>({
		path: route.path,
		element:
			route.includedRoutes.length === 0 ||
			route.includedRoutes.includes(role) ? (
				route.element
			) : (
				<Navigate to={route.options.toProfile ? username : route.fallback} />
			),
	}))
}

const Navigation = ({ user }) => {
	const navs = useRoutes(renderRoutes(user.role,user.username));

	return navs;
};
export default Navigation;