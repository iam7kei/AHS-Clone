import Axios from "axios";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/*
TO BE ADDED ONCE USER AUTHENTICATION IS ADDED

// set token if exists
if (localStorage.getItem("token")) {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`;
}
 */
export default axios;
