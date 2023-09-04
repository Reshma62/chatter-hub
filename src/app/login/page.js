"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { usersInformation } from "../GlobalRedux/slices/useSlices";

const page = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();


  // Dispatch the action with a payload
  // dispatch(userRegistration("newUserValue"));
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setErrors({});
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  /* Data send */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      const userInfo = {
        email: res.data.email,
        pass: res.data.pass,
      };
      if (res.data.success) {
        toast.success(res.data.success);
        setFormData({
          email: "",
          password: "",
        });
        setErrors({});
      } else if (res.data.error) {
        setErrors(res.data.error);
      }
      setTimeout(() => {
        router.push("/");
      }, 2000);
      dispatch( usersInformation( userInfo ) );
      localStorage.setItem("users", JSON.stringify(userInfo))
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <div className="hero-content flex-col lg:flex-row !max-w-[100rem]">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-headingColor">
            Welcome back to <br />{" "}
            <span className="text-primary mt-4 inline-block">Chatter Hub</span>
          </h1>
          <p className="py-6 text-pColor">
            Create account for free and lets make unlimited online friends
          </p>
        </div>
        <div className="card flex-shrink w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email:</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                value={formData.email}
                name="email"
                onChange={handleInputChange}
              />{" "}
              {errors.email && (
                <p className={`bg-red-500 text-white my-3 p-3 rounded`}>
                  {errors.email}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password:</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                value={formData.password}
                name="password"
                onChange={handleInputChange}
              />{" "}
              {errors.password && (
                <p className={`bg-red-500 text-white my-3 p-3 rounded`}>
                  {errors.password}
                </p>
              )}
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
