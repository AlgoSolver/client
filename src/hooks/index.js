import {
  QueryClient,
  useMutation as mutation,
  useQuery as query,
} from "react-query";
import axios from "../api";

const client = new QueryClient();

export const request = async (url, method, data = null) => {
  try {
    const res = await axios[method](url, data);
    return res.data;
  } catch (err) {
    if(err?.response?.status === 404) return err.response.data;
    throw new Error(
      err?.response?.data?.message || "Network Error, please try again later."
    );
  }
};
export const configOptions = {
  staleTime: Infinity,
  refetchOnWindowFocus: false,
  retry: false,
};

export const updateState = (key, value) => {
  client.setQueryData(key, value);
};

export const useQuery = (name, url, options = {}) =>
  query(name, () => request(url, "get"), {
    ...configOptions,
    ...options,
  });

export const useMutation = (url, method, options = {}) =>
  mutation((data) => request(url, method, data), {
    ...configOptions,
    ...options,
  });
export default client;
