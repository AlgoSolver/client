import RenderAuth from "./navbar.auth";
import { NavLink } from "react-router-dom";

const DesktopNavbar = () => {
	return (
		<div className="nav__links">
			<ul className="nav__list list1">
				<li className="nav__item">
					<NavLink
						activeClassName="active"
						to="/playground/new/empty"
						className="nav__link"
					>
						playground
					</NavLink>
				</li>
				<li className="nav__item">
					<NavLink
						activeClassName="active"
						to="/practise"
						className="nav__link"
					>
						practise
					</NavLink>
				</li>
				<li className="nav__item">
					<NavLink
						activeClassName="active"
						to="/problems"
						className="nav__link"
					>
						problems
					</NavLink>
				</li>
				<li className="nav__item">
					<NavLink
						activeClassName="active"
						to="/blog"
						className="nav__link"
					>
						Blog
					</NavLink>
				</li>
			</ul>
			<ul className="nav__list">
				<RenderAuth menu="nav" />
			</ul>
		</div>
	);
};
export default DesktopNavbar;