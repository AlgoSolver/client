import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NODE_ENV ==='development'? process.env.REACT_APP_DEV_URL : process.env.REACT_APP_API_URL,
  withCredentials: true,
});
export default instance;
