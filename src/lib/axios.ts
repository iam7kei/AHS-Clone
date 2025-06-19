import Axios from "axios";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axios;
