import Link from "next/link";
import { useState } from "react";

const login = () => {
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
  return (
    <div className="md:h-screen w-screen flex justify-center items-center">
      <div className="w-96 bg-white md:shadow-md rounded-md p-6 space-y-10 m-2">
        <h1 className="font-bold text-4xl text-center">Login</h1>
        <form className="flex flex-col space-y-4">
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
          <button className="btn-primary" type="submit" onClick={login}>
            Login
          </button>
          <button className="text-xs hover:text-blue-500 text-right underline">
            Forgot password?
          </button>
          <small className="text-center pt-5">
            Don't have an account?
            <Link href="/auth/signup">
              <a className="text-blue-500 ml-2">Signup</a>
            </Link>
          </small>
        </form>
      </div>
    </div>
  );
};

export default login;
