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
          <div className="w-screen h-screen rounded-2xl flex flex-col-reverse items-center">
               <div className="w-[50px] bg-[#be7301] mx-[100px] h-[200px] border-x-[#000000] border-x-[3px] gap-[10px] z-0"></div>
               <form
                    onSubmit={handleLogin}
                    className="flex h-[275px] w-[250px] flex-col items-center"
                    >
                    
                         <div className="flex w-full flex-col h-[75px] ml-[-10px] mr-[10px] border-[3px] border-black rounded-b-lg bg-[#cc8e31] rounded-t-2xl pt-[5px] pb-[5px] border-3px">
                              <label for="username" className="mx-[12%]">Username:</label>
                              <input
                              type="text"
                              name="Username"
                              value = {userObject.Username}
                              onChange={handleInputChange}
                              className="mx-[10%] border-[2px] border-black rounded-xl mb-[5px] text-center" />
                         </div>
                    <div className="h-[10px] bg-[#be7301] w-[50px] border-x-[3px] border-black">
                    </div>
                    {/* Passwords */}
                    
                    <div className="flex flex-col pt-[5px] w-full h-[75px] bg-[#cc8e31] ml-[5px] border-[3px] border-black mr-[-1px] rounded-lg">
                         <label for="password" className="mx-[12%]">Password:</label>
                         <input
                         type="password"
                         name="Password"
                         value = {userObject.Password}
                         onChange={handleInputChange}
                         className="mx-[10%] border-[2px] border-black rounded-xl mb-[5px] text-center"
                         />
                    </div>
                    <div className="h-[10px] bg-[#be7301] w-[50px] border-x-[3px] border-black"></div>
                    {/* Authorisation */}
                    <div className="flex pt-[5px] flex-col w-full h-[75px] bg-[#cc8e31] ml-[-2px] mr-[2px] border-[3px] p-[5px] rounded-lg border-black">
                         <button type="submit" className="h-[40px] bg-green-500 mx-[50px] rounded-xl border-black border-[3px] mb-[5px] mt-[7px]">
                         Login
                         </button>
                    </div>
                    <div className="h-[10px] bg-[#be7301] w-[50px] border-x-[3px] border-black"></div>
                    <div className="ml-[-7px] mr-[7px] flex flex-col pt-[5px] w-full h-[75px] bg-[#cc8e31] rounded-t-lg rounded-b-2xl border-black border-[3px] items-center text-center">
                         <a className="h-[40px] text-center mt-[5px]" onClick={handleSignUp}>Sign Up?</a>
                    </div>
               </form>
               <div className="w-[50px] bg-[#be7301] mx-[100px] h-[50px] rounded-t-lg border-[#000000] border-t-[3px] border-x-[3px]" />
          </div>
     );
};

export default SignIn;
