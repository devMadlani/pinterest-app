import React, { useState } from "react";
import Image from "../components/Image";
import apiRequest from "../utils/apiRequest";
import { useNavigate } from "react-router";
import useAuthStore from "../store/authStore";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setCurrentUser } = useAuthStore();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
      const res = await apiRequest.post(
        isRegister ? "/users/auth/register" : "/users/auth/login",
        data
      );
      setCurrentUser(res.data);
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col gap-8 items-center justify-center p-8 rounded-4xl shadow-lg   ">
        <Image className="" path="/general/logo.png" w={36} h={36} alt="" />
        <h1 className="text-3xl">
          {isRegister ? "Create Account" : "Login to you account"}
        </h1>

        {isRegister ? (
          <form
            className="w-full flex flex-col gap-4"
            key="register"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm" htmlFor="username">
                Username
              </label>
              <input
                className="px-4 py-2.5 rounded-2xl border-2 border-[#e0e0e0]"
                type="text"
                name="username"
                id="username"
                required
                placeholder="username"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm" htmlFor="displayName">
                Name
              </label>
              <input
                className="px-4 py-2.5 rounded-2xl border-2 border-[#e0e0e0]"
                type="text"
                name="displayName"
                id="displayName"
                required
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                className="px-4 py-2.5 rounded-2xl border-2 border-[#e0e0e0]"
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm" htmlFor="password">
                Password
              </label>

              <input
                className="px-4 py-2.5 rounded-2xl border-2 border-[#e0e0e0]"
                type="password"
                name="password"
                id="password"
                required
                placeholder="password"
              />
            </div>
            <button
              className="bg-[#e50829]  px-4 py-2.5 rounded-3xl text-white cursor-pointer font-bold"
              type="submit"
            >
              Register
            </button>
            <p className="text-sm text-center">
              Already have an account?{" "}
              <b
                className="cursor-pointer"
                onClick={() => setIsRegister(false)}
              >
                Login
              </b>
            </p>
            {error && <p className="text-[#e50829]">{error}</p>}
          </form>
        ) : (
          <form
            className="w-full flex flex-col gap-4"
            key="login"
            action=""
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                className="px-4 py-2.5 rounded-2xl border-2 border-[#e0e0e0]"
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm" htmlFor="password">
                Password
              </label>

              <input
                className="px-4 py-2.5 rounded-2xl border-2 border-[#e0e0e0]"
                type="password"
                name="password"
                id="password"
                required
                placeholder="password"
              />
            </div>
            <button
              className="bg-[#e50829]  px-4 py-2.5 rounded-3xl text-white cursor-pointer font-bold"
              type="submit"
            >
              Login
            </button>
            <p className="text-sm text-center">
              Don&apos;t have an account?{" "}
              <b className="cursor-pointer" onClick={() => setIsRegister(true)}>
                Register
              </b>
            </p>
            {error && <p className="text-[#e50829]">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
