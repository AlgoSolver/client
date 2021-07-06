import Elements from "../pages/elements/";
import Home from "../pages/home";
import Account from '../pages/account';
import User from '../pages/user/';
import Problems from "../pages/problems/";
import Playground from "../pages/playground/";
import Practise from "../pages/practise/";
import Submission from "../pages/submission";
import Blog from "../pages/blog";


// import CreateProblem from "../pages/create-problem/";

import {createRoute,ROLES} from './utils';

const routes = [
	createRoute('/', <Home />,[ROLES.SIGNEDOUT],"/hello"),
	createRoute('/accounts*', <Account />,[ROLES.SIGNEDOUT],"/"),
	createRoute('/playground*', <Playground />),
	createRoute('/problems*', <Problems />),
	createRoute('/practise*',<Practise />),
	createRoute('/blog*',<Blog />),
	createRoute('/submission/:id', <Submission />),
	createRoute('/:username*', <User />,[ROLES.STUDENT, ROLES.CONTENT_CREATOR, ROLES.ADMIN],"/"),
]

export default routes;