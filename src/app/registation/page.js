"use client";
import React, { useState, useEffect } from "react";
import InputField from "../components/InputField";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignUp() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

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
      const res = await axios.post("http://localhost:8000/auth/registation", {
        firstName: formData.firstName,

        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });

      if (res.data.success) {
        toast.success(res.data.success);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
        setErrors({});
      } else if (res.data.error) {
        setErrors(res.data.error);
      }
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
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-headingColor">
            Welcome to <br />{" "}
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
                <span className="label-text">First Name:</span>
              </label>
              <input
                type="text"
                placeholder="first name"
                className="input input-bordered"
                value={formData.firstName}
                name="firstName"
                onChange={handleInputChange}
              />
              {errors.firstName && (
                <p className="bg-red-500 text-white my-3 p-3 rounded">
                  {errors.firstName}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name:</span>
              </label>
              <input
                type="text"
                placeholder="last name"
                className="input input-bordered"
                value={formData.lastName}
                name="lastName"
                onChange={handleInputChange}
              />{" "}
              {errors.lastName && (
                <p className={`bg-red-500 text-white my-3 p-3 rounded`}>
                  {errors.lastName}
                </p>
              )}
            </div>
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
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
