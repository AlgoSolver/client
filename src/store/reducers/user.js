import * as userAction from '../action-types/user';

const INITIAL_STATE = {
	loading:false,
	error:false,
	data:null
}

export const authReducer = (state ={}, action) => {
  switch (action.type) {
    case userAction.auth:
      return action.payload;
    default:
      return state;
  }
};

export const statusReducer = (state=INITIAL_STATE,action)=>{
	switch(action.type){
		case userAction.loading:
		   return {
			loading:true,
			error:false,
			data:null
			};
		case userAction.error:
		   return {
			loading:false,
			error:true,
			data:(action?.payload?.message || 'Unknown Error')
			};
		case userAction.success:
		   return {
			loading:false,
			error:false,
			data:action.payload
			};
		case 'user-go': return INITIAL_STATE	
		default: return state	
	}
}