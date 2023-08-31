"use client";
import React, { useState } from "react";
import InputField from "../../components/InputField";
import Link from "next/link";
import axios from "axios";
function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const registration = await axios.post(
        "http://localhost:8000/auth/registation",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }
      );
      console.log(registration);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
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
              />
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
              />
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
              />
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
}

export default SignUp;
