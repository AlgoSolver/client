import routes from "./init-routes.js";
import { Routes, Route, Navigate, useRoutes } from "react-router-dom";


const renderRoutes = (role)=>{
	return routes.map(route=>({
		path: route.path,
		element:
			route.includedRoutes.length === 0 ||
			route.includedRoutes.includes(role) ? (
				route.element
			) : (
				<Navigate to={route.fallback} />
			),
	}))
}

const Navigation = ({ user }) => {
	const navs = useRoutes(renderRoutes(user.role));

	return navs;
};
export default Navigation;