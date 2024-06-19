import axios from "axios";

export const axiosPrivate = axios.create({
  headers: { "Content-Type": "application/json" },

  baseURL: "https://dummyjson.com/",
});

axiosPrivate.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
