import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login Successful");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 300);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error:" + err.response.data.message);
          setTimeout(() => {}, 3000);
        }
      });
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* close button */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email */}
            <div className="mt-4">
              <span className="block mb-2">Email</span>
              <input
                type="email" // change to "text" to skip @ checks
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: "* Email is required" })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password */}
            <div className="mt-4">
              <span className="block mb-2">Password</span>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", {
                  required: "* Password is required",
                })}
              />
              <br />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center mt-4">
              <button
                type="submit"
                className="bg-pink-500 btn text-white rounded-md px-3 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p>
                Not registered?
                <Link
                  to="/signup"
                  className="underline px-3 text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
