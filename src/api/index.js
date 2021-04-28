import axios from "axios";
console.log(process.env.NODE_ENV)
const instance = axios.create({
  baseURL: (
    process.env.NODE_ENV ==='development'
    ? process.env.REACT_APP_DEV_URL
    : process.env.REACT_APP_PROD_URL
  ),
  withCredentials: true,
});
export default instance;
