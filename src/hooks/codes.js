import {useInfiniteQuery} from 'react-query';
import axios from '../api';
//import client from "./index";

const request = async (url, method, data = null) => {
  try {
    const res = await axios[method](url, data);
    return res.data;
  } catch (err) {
    throw new Error(
      err?.response?.data?.message || "Network Error, please try again later."
    );
  }
};
const configOptions = {
  staleTime: Infinity,
  refetchOnWindowFocus: false,
  retry: false,
};

export const useCodes = (props)=>
    useInfiniteQuery(
      'codes',
      ({pageParam=1})=>{
        return request('/code?page='+ pageParam,'get')},
      {
        ...props,
        ...configOptions
      }
    )
