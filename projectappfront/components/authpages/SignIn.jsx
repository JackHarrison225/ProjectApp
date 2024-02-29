"use client";

import React, {useState, useEffects} from 'react'
import Link from 'next/link'
import {NextSvg , AngularSvg, JavascriptSvg, ExpressSvg, MongoDbSvg, CPlusSvg, SqlSvg, PythonSvg, PhpSvg } from './imports'

const SignIn = (props) => {
     const [userObject, setuserObject] = useState({Username:"", Password:""})
     const handleLogin = (e) => {
          e.preventDefault()

          try {
               console.log("Signing in user")
               props.submitHandler(userObject);

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
          props.setAuthProcess(false);
          console.log("Sign Up");
     };
     return (
          <div className="flex items-center justify-center h-screen w-screen">
               <div className="p-2 md:p-4 relative flex flex-1 flex-col bg-gray-100 brightness-10 items-center justify-center h-screen ">
               
                    <div className="">
                    <div className="mb-10 flex flex-col justify-center items-center">
                    <h3 className="text-5xl font-semibold">Welcome back!</h3>
                    <p className="text-xs text-gray-500 mt-2">Login to access your account. Do not have an account? <Link className="text-blue-600 text-xs" href="/signup">Sign up instead?</Link></p>
                    </div>

                    <div className="from-section">
                         <form className="flex flex-col" onSubmit={handleLogin}>
                         <label htmlFor="username" className="text-sm mb-2">
                              Username
                         </label>
                         <input
                         className="border w-full border-gray-300 rounded-md p-1 mb-4"
                         type="text"
                         placeholder="Username"
                         name="Username"
                         value={userObject.Username}
                         onChange={handleInputChange} />
                         
                         
                         <label htmlFor="password">
                         <div className="flex items-center justify-between">
                         <p className="text-sm mb-2">Password</p>
                         <p className="text-xs mb-2 text-gray-500">Forgot password?</p>
                         </div>
                         </label>
                         <input
                         className="border rounded-md w-full p-1 border-gray-300 mb-4"
                         name="Password"
                         type="password"
                         placeholder="Password"
                         value={userObject.Password}
                         onChange={handleInputChange} />
                        
                         <button type="submit" className="text-white text-sm flex flex-start border w-fit px-3 py-1 rounded-md bg-black hover:bg-gray-800 duration-300">
                              Sign in
                         </button>
                         </form>
                    </div>
               </div>

               
              
 
            </div>
            <div className=" p-2 md:p-4 lg:p-4 hidden md:flex flex-1 w-full h-screen bg-black">
               <div className="relative z-10 flex flex-col flex-1  w-full items-center ">
                    <div className="relative -rotate-12  w-full  flex flex-1 flex-col">
                    
                    <div className="icon-container text-white rotate-45 absolute md:bottom-1 md:left-20 lg:bottom-8 xl:bottom-2 lg:left-36 xl:left-40 xl:w-[40%]">
                    <NextSvg
                         className="absolute icon fill-white"
                         />
                    </div>

                    <div className="icon-container -rotate-12 md:left-8 md:bottom-6 lg:bottom-14 xl:left-14 xl:bottom-8 xl:w-[37%]">
                    <PythonSvg
                    className="absolute"/>
                    </div>

                    <div className="icon-container rotate-6 md:bottom-4 lg:bottom-2 xl:left-12 xl:top-4 xl:w-[33%]">
                    <AngularSvg className=" absolute "/>
                    </div>
                    
                    <div className="icon-container -rotate-12 md:left-12 lg:top-6 lg:left-16 lg:bottom-8 xl:top-12 xl:left-36 xl:right-10 xl:w-[30%]">
                         <JavascriptSvg
                          className="absolute "/>
                    </div>

                         


                    </div>
                    <div className="flex flex-1 justify-center items-center">
                    <h3 className="md:text-xl lg:text-3xl text-gray-200">
                       We Orchestrate.
                    </h3>
                    </div>





               </div>

               <div className="relative flex flex-col flex-1 overflow-hidden w-full items-center ">
                    <div className="flex flex-1 items-center w-full justify-center">
                         <h3 className="md:text-xl lg:text-3xl text-gray-200">
                         You build,
                         </h3>
                    </div>
                    <div className="relative flex flex-1 flex-col  w-full ">
                    
                    <div className="icon-container text-white rotate-12 absolute md:left-2 lg:top-1 lg:bottom-6 lg:left-4 xl:left-2 xl:w-[38%]">
                    <ExpressSvg
                         className="absolute icon fill-white"
                         />
                    </div>

                    <div className="icon-container -rotate-12 md:left-12 md:bottom-6 lg:left-20 lg:bottom-8 xl:left-32 xl:bottom-2 xl:w-[32%]">
                    <PhpSvg
                    className="absolute"/>
                    </div>

                    <div className="icon-container rotate-6 md:bottom-4 md:left-20 lg:left-20 lg:bottom-6 xl:left-32 xl:top-2 xl:w-[30%]">
                    <MongoDbSvg className=" absolute "/>
                    </div>
                    
                    <div className="icon-container -rotate-12 md:left-4 lg:left-2 lg:w-[45%] lg:bottom-4 xl:left-10 xl:top-6 xl:right-10 xl:w-[24%]">
                         <CPlusSvg
                          className="absolute "/>
                    </div>

                         


                    </div>
               </div>
               </div>

        </div>
    )
}

export default SignIn


