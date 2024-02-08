"use client";

import { useState, useEffect } from "react";

const SignIn = ({setAuthProcess, submitHandler}) => {
     const [userObject, setuserObject] = useState({Username:"", Password:""})
     const handleLogin = async (e) => {
          e.preventDefault()

     try {
          console.log("Signing in user")
          await submitHandler(userObject);

          } catch (error) {
               console.error(error);
               console.error("Failure signing in user");
          }
     };

     const handleInputChange = (event) => {
          setuserObject({
          ...userObject,
          [event.target.name]: event.target.value
          })
     }
     const handleSignUp = () => {
          setAuthProcess(true);
          console.log("Sign Up");
     };

     return (
          <div className="">
               <form
               onSubmit={handleLogin}
               className="flex flex-col"
               >
                    <label for="username" className="">Username:</label>
                    <input
                    type="text"
                    name="Username"
                    value = {userObject.Username}
                    onChange={handleInputChange}
                    className="" />
                   
                    {/* Passwords */}
                    <label for="password" className="">Password:</label>
                    <input
                    type="password"
                    name="Password"
                    value = {userObject.Password}
                    onChange={handleInputChange}
                    className=""
                    />
                   
                    {/* Authorisation */}
                    <button type="submit" className="">
                    Login
                    </button>
                    <a className="" onClick={handleSignUp}>Sign Up?</a>
               </form>
          </div>
     );
};

export default SignIn;