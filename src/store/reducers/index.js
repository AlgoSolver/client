import {combineReducers} from 'redux';
import {statusReducer, authReducer} from './user'
export default combineReducers({
	user:statusReducer,
	auth:authReducer
})