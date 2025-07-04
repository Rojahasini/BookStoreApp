import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex mt-10 h-screen items-center  justify-center ">
        <div className="w-[500px] relative rounded-3xl p-6">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-lg btn-circle btn-ghost absolute right-2 top-0"
              >
                ✕
              </Link>

              <h3 className="font-bold text-2xl">Contact Us</h3>
              {/* Name */}
              <div className="mt-4">
                <span className="block mb-2">Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 py-1 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
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
                  placeholder="Email address"
                  className="w-full px-3 py-1 border rounded-md outline-none"
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
              <div className="mt-4 ">
                <span className="block mb-2">Message</span>
                <textarea
                  placeholder="Type your message"
                  className="w-full px-3 py-2 border rounded-md outline-none"
                  rows={5} // roughly equivalent to h-40
                  style={{ resize: "vertical" }}
                />
              </div>
              {/* Button */}
              <div className="flex justify-between items-center mt-4">
                <button className="bg-pink-500 btn text-white rounded-md px-3 hover:bg-pink-700 duration-200">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
