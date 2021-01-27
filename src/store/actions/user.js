import axios from '../../api/';
import * as userAction from '../action-types/user';


export const requestStatus=(data,to,method="post")=>async (dispatch)=>{
	dispatch({
		type:userAction.loading,
	});
	let res;
	try{
		res = await axios[method](to,{...data});
	}catch(err){
		dispatch({
		type:userAction.error,
		payload:err?.response?.data
		});
		return;
	}
	dispatch({
		type:userAction.success,
		payload:res?.data
	});
	if(res?.data?._id){
	dispatch({
		type:userAction.auth,
		payload:res?.data
	 })
    }
}

export const logout = ()=>{

}