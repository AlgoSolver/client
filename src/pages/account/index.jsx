import {Routes , Route, Navigate} from 'react-router-dom';
import Login from "../login";
import ActivateAccount from "../activate-account/";
import Signup from "../signup";
import PasswordRecovery from "../password-recover/";
import NewPassword from "../new-password";

const Account = ()=>{
	return <Routes>
		<Route path="login" element={<Login />} />
		<Route path="signup" element={<Signup />} />
		<Route path="recover" element={<PasswordRecovery />} />
		<Route path="new-password/:token" element={<NewPassword />} />
		<Route path="activate-account/:token" element={<ActivateAccount />} />
		<Route path="*" element={<Navigate to="login" />} />
	</Routes>
}

export default Account;