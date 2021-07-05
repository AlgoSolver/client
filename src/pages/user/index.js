import {Route,Routes, Navigate} from 'react-router-dom';
import Profile from "../profile/";
import UserSubmissions from "../user-submissions";
import UserPlaygrounds from "../user-playgrounds";

const User = ()=>{
	return <Routes>
		<Route path="" element={<Profile />} />
		<Route path="submissions" element={<UserSubmissions />} />
		<Route path="playgrounds" element={<UserPlaygrounds />} />
		<Route path="*" element={<Navigate to="" />} />
	</Routes>
}
export default User;
