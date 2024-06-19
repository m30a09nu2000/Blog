import React from "react";
import { useNavigate } from "react-router-dom";

import * as Yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { userService } from "../apiUrls";
import "./Login.css";

const schema = Yup.object().shape({
  username: Yup.string().required("username required"),
  password: Yup.string().required("password required"),
});
function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const formData = async (data) => {
    try {
      const response = await userService.login(data);
      if (response) {
        localStorage.setItem("token", response.data.token);
        reset();
        navigate("/user");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-container">
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(formData)}>
          <input type="text" placeholder="username" {...register("username")} />
          <span>{errors.username?.message}</span>
          <input
            type="password"
            placeholder="password"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
