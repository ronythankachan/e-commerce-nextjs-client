import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import {
  showDissapearingSuccessAlert,
  showErrorAlert,
  showSuccessAlert,
} from "../components/general/alert/AlertActions";
import { AlertContext } from "../components/general/alert/AlertProvider";
import { signUpAPI } from "../lib/utils";
import { UserType } from "../types";

const signup = () => {
  const router = useRouter();
  //Get alert context
  const value: any = useContext(AlertContext);
  const [_, dispatch] = value;

  const [formData, setFormData] = useState<UserType>({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const clearSignUpForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      cpassword: "",
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const checkErrors = () => {
    let error = "";
    if (!formData.name) error = "Name field is required";
    else if (!/^[a-z]+$/i.test(formData.name))
      error = "Name should only contain letters";
    else if (!formData.email) error = "Email field is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) error = "Invalid email";
    else if (!formData.phone) error = "Phone number is required";
    else if (!/^[789]\d{9}$/.test(formData.phone))
      error = "Invalid phone number";
    else if (!formData.password) error = "Password field is required";
    else if (!formData.password) error = "Re-type the password";
    else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/.test(
        formData.password
      )
    )
      error =
        "Password should atleast contain 8 characters including one uppercase letter, one special character and a number";
    else if (formData.password !== formData.cpassword)
      error = "Passwords don't match";
    return error;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
    const error = checkErrors();
    if (error) {
      showErrorAlert(dispatch, error);
    } else {
      delete formData.cpassword;
      console.log(formData);
      try {
        showSuccessAlert(dispatch, "Adding user account");
        const result = await signUpAPI(formData);
        showDissapearingSuccessAlert(dispatch, result.message);
        clearSignUpForm();
        router.push("/admin/login");
      } catch (err: any) {
        showErrorAlert(dispatch, err.response.data.message);
      }
    }
  };

  return (
    <div className="md:h-screen w-screen flex justify-center items-center">
      <Head>
        <title>Signup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-96 bg-white md:shadow-md rounded-md p-6 space-y-10 m-2">
        <h1 className="page-title text-center">Sign up</h1>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            className="input-text"
            type="text"
            placeholder="Full Name"
            name="name"
            onChange={handleChange}
          />
          <input
            className="input-text"
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={handleChange}
          />
          <div className="flex items-center space-x-2 ">
            <div className="text-gray-400 border p-3 rounded-md bg-gray-100">
              +91
            </div>
            <input
              className="input-text w-full"
              type="number"
              placeholder="Phone number"
              name="phone"
              onChange={handleChange}
            />
          </div>
          <input
            className="input-text"
            type="password"
            placeholder="Enter a password"
            name="password"
            onChange={handleChange}
          />
          <input
            className="input-text"
            type="password"
            placeholder="Confirm password"
            name="cpassword"
            onChange={handleChange}
          />
          <button className="btn-primary" type="submit">
            Sign up
          </button>
          <small className="text-center pt-5">
            Already have an account?
            <Link href="/login">
              <a className="text-blue-500 ml-2">Login</a>
            </Link>
          </small>
        </form>
      </main>
    </div>
  );
};

export default signup;
