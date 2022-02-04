import Link from "next/link";
import Head from "next/head";
import React, { useContext, useState } from "react";
import { AlertContext } from "../components/general/alert/AlertProvider";
import {
  showDissapearingSuccessAlert,
  showErrorAlert,
  showSuccessAlert,
} from "../components/general/alert/AlertActions";
import { loginAPI } from "../lib/utils";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

const login = () => {
  const [cookie, setCookie] = useCookies(["user"]);
  const router = useRouter();
  //Get alert context
  const value: any = useContext(AlertContext);
  const [_, dispatch] = value;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const checkErrors = () => {
    let error = "";
    if (!formData.email) error = "Email field is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      error = "Enter a valid email address";
    else if (!formData.password) error = "Password field is required";
    else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/.test(
        formData.password
      )
    )
      error =
        "Password should atleast contain 8 characters including one uppercase letter, one special character and a number";
    return error;
  };

  const clearLoginForm = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const error = checkErrors();
    if (error) {
      showErrorAlert(dispatch, error);
    } else {
      showSuccessAlert(dispatch, "Validating...");
      try {
        const result = await loginAPI(formData);
        setCookie("user", JSON.stringify(result), {
          path: "/",
          maxAge: 3600 * 24, // Expires after 24hr
          sameSite: true,
        });
        showDissapearingSuccessAlert(dispatch, "Logged In successfully");
        clearLoginForm();
        router.push("/admin/dashboard");
      } catch (err: any) {
        showErrorAlert(dispatch, err.response.data.message);
      }
    }
  };

  return (
    <div className="md:h-screen w-screen flex justify-center items-center">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-96 bg-white md:shadow-md rounded-md p-6 space-y-10 m-2">
        <h1 className="page-title text-center">Login</h1>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            className="input-text"
            type="text"
            placeholder="Enter e-mail"
            name="email"
            onChange={handleChange}
          />
          <input
            className="input-text"
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
          />
          <button className="btn-primary" type="submit">
            Login
          </button>
          <button className="text-xs hover:text-blue-500 text-right underline">
            Forgot password?
          </button>
          <small className="text-center pt-5">
            Don't have an account?
            <Link href="/admin/signup">
              <a className="text-blue-500 ml-2">Signup</a>
            </Link>
          </small>
        </form>
      </main>
    </div>
  );
};

export default login;
