import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { backednUrl } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { storeUserInfo } from "../../../utils/auth.services";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const loginData = { email: data.email, password: data.password };
    await fetch(`${backednUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then(async (res) => {
        setError(false);
        reset();
        const result = await res.json();
        storeUserInfo(result?.data.token);
        Swal.fire({
          title: "Login Successful",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate("/dashboard", { replace: true });
      })
      .catch((error: any) => setError(true));
  };

  return (
    <div className="hero min-h-screen py-16 bg-base-200">
      <div className="hero-content w-4/5 flex-col lg:flex-row justify-center">
        <div className="card md:w-4/5 bg-base-200 rounded-lg shadow-xl p-8">
          <div className="flex justify-center mb-2">
            <img
              src="https://res.cloudinary.com/dg4spmx5h/image/upload/v1720260269/b5nymz5k3zzr7yqevjvh.png"
              width={150}
              alt=""
              className="text-center"
            />
          </div>
          <h4 className="text-4xl font-bold text-center my-4">Login</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">
                  Email<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Type Email Here"
                {...register("email", { required: true })}
                name="email"
                className="input input-bordered"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500 mt-2">Email is required</p>
              )}
            </div>
            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text font-bold">
                  Password<span className="text-red-500">*</span>
                </span>
              </label>
              <div className="join flex w-full">
                <input
                  type="password"
                  placeholder="Type Your Password"
                  {...register("password", { required: true })}
                  name="password"
                  className="input flex-grow input-bordered join-item"
                />
              </div>
              {errors.password?.type === "required" && (
                <p className="text-red-500 mt-2">Password is required</p>
              )}
            </div>
            {error && <p className="text-red-500">Wrong Credentials</p>}
            <div className="form-control mt-6">
              <input
                className="btn btn-primary text-[#c6ab7c] bg-[#213644] border-0"
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
