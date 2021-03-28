import {useQuery} from 'react-query'
import axios from '../api'

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

export const useProblems=(page=1)=>{
  console.log(page)
  return useQuery(
    ['problems',page],
    ()=>request(`/problems?page=${page}`,'get'),
    configOptions
  )
}
