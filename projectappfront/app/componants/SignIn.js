"use client";

import { useState, useEffect } from "react";

const SignIn = ({setAuthProcess, submitHandler}) => {
     const handleLogin = async (e) => {
          e.preventDefault();

     try {
          console.log("Signing in user")
          await submitHandler(e);

          } catch (error) {
               console.error(error);
               alert("Wrong username or password.")
               console.error("Failure signing in user");
          }
     };

     const handleSignUp = () => {
          setAuthProcess(true);
          console.log("Sign Up");
     };

     return (
          <div className="">
               <form
                    onSubmit={handleLogin}
                    className=""
               >
               <div className="">
                    {/* Username */}
                    <div className="">
                    <label for="username" className="">Username</label>
                    <input
                    type="text"
                    name="username"
                    className=""
                    />
                    </div>
                    {/* Passwords */}
                    <div className="">
                    <label for="password" className="">Password</label>
                    <input
                    type="password"
                    name="password"
                    className=""
                    />
                    </div>

                    {/* Authorisation */}
                    <div className="">
                    <button className="">
                    Login
                    </button>
                    <a className="" onClick={handleSignUp}>Sign Up?</a>
                    </div>
               </div>
               </form>
          </div>
     );
};

export default SignIn;