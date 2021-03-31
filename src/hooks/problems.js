import {useQuery} from 'react-query'
import client from './index'
import axios from '../api'
import {getLocalStorage} from '../utils/local-storage';
const request = async (url,method,data=null)=>{
	try{
		const res = await axios[method](url,data);
		return res.data;
	}catch(err){
		throw new Error(err?.response?.data?.message || 'Network Error, please try again later.')

	}
}
const configOptions={
	staleTime:Infinity,
	refetchOnWindowFocus:false,
	retry:false
}

export const useCodePlayGround = (id) => {
	return useQuery("problem-code-test", () => {}, {
		...configOptions,
		initialData: {code: getLocalStorage(`problem-code-${id}`)},
	});
};

export const updateCodePlayGround = (arg) => {
		client.setQueryData('problem-code-test', (oldData)=>({...oldData,...arg}));
};
export const useProblems=(page=1)=>{
  return useQuery(
    ['problems',page],
    ()=>request(`/problems?page=${page}`,'get'),
    configOptions
  )
}
export const useProblem=(id)=>{
	return useQuery(
		["problem",id],
		()=>request(`/problems/${id}`,'get'),
    {
			...configOptions,
			cacheTime:5000
		}
	)
}
