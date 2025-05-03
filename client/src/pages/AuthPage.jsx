import React, { useState } from "react";
import Image from "../components/Image";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>
        <Image className="" path="/general/logo.png" alt="" />
        <h1>{isRegister ? "Create Account" : "Login to you account"}</h1>

        {isRegister ? (
          <form key="register" action="">
            <div>
              <label htmlFor="displayname">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                required
                placeholder="username"
              />
            </div>
            <div>
              <label htmlFor="displayname">Name</label>
              <input
                type="text"
                name="displayname"
                id="displayname"
                required
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>

              <input
                type="passwrod"
                name="passwrod"
                id="passwrod"
                required
                placeholder="passwrod"
              />
            </div>
            <button type="submit">Register</button>
            <p>
              Already have an account?{" "}
              <b
                className="cursor-pointer"
                onClick={() => setIsRegister(false)}
              >
                Login
              </b>
            </p>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        ) : (
          <form key="login" action="">
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>

              <input
                type="passwrod"
                name="passwrod"
                id="passwrod"
                required
                placeholder="passwrod"
              />
            </div>
            <button type="submit">Login</button>
            <p>
              Don&apos;t have an account?{" "}
              <b className="cursor-pointer" onClick={() => setIsRegister(true)}>
                Register
              </b>
            </p>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
