import React from "react";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successful");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error:" + err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center  justify-center ">
        <div className="w-[600px] relative rounded-3xl p-6">
          <div className="">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-lg btn-circle btn-ghost absolute right-2 top-0"
              >
                ✕
              </Link>

              <h3 className="font-bold text-2xl">Sign Up</h3>
              {/* Name */}
              <div className="mt-4">
                <span className="block mb-2">Name</span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-red-500 text-sm">
                    * This field is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4">
                <span className="block mb-2">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    * This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4">
                <span className="block mb-2">Password</span>
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", {
                    required: true,
                  })}
                />
                <br />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    * This field is required
                  </span>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-between items-center mt-4">
                <button className="bg-pink-500 btn text-white rounded-md px-3 hover:bg-pink-700 duration-200">
                  Sign Up
                </button>
                <p>
                  Already have an account?
                  <button
                    className="underline px-3 text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
