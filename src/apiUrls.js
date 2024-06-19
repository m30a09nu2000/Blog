import { axiosPrivate } from "./Interceptor";

const login = (data) => {
  return axiosPrivate.post("auth/login", data);
};

const userData = () => {
  return axiosPrivate.get("auth/me");
};

const getAllUser = () => {
  return axiosPrivate.get("users");
};

const singleUser = (id) => {
  return axiosPrivate.get(`users/${id}`);
};

const userService = {
  login,
  userData,
  getAllUser,
  singleUser,
};

export { userService };
