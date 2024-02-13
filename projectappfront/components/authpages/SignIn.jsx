"use client";

import React, {useState, useEffects} from 'react'
import Link from 'next/link'
import {NextSvg , AngularSvg, JavascriptSvg, ExpressSvg, MongoDbSvg, CPlusSvg, SqlSvg, PythonSvg, PhpSvg } from './imports'

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
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="p-2 md:p-4 relative flex flex-1 flex-col bg-gray-100 brightness-10 items-center justify-center h-screen ">
               
               <div className="">
               <div className="mb-10 flex flex-col justify-center items-center">
               <h3 className="text-5xl font-semibold">Welcome back!</h3>
               <p className="text-xs text-gray-500 mt-2">Login to access your account. Do not have an account? <Link className="text-blue-600 text-xs" href="#">Sign up instead</Link></p>
               </div>

               <div className="from-section">
               <form className="flex flex-col">
               <label for="username" className="">
               <p className="text-sm mb-2">Username</p>
               <input
               className="border w-full border-gray-300 rounded-md p-1 mb-4"
               type="text"
               placeholder="Username"
               name="Username"
               value={userObject.Username}
               onChange={handleInputChange} />
               </label>
               
               <label for="password">
                    <div className="flex  items-center justify-between">
                    <p className="text-sm mb-2">Password</p>
                  <p className="text-xs mb-2 text-gray-500">Forgot password?</p>
                    </div>
              
               <input
               className="border rounded-md w-full p-1 border-gray-300 mb-4"
               name="password"
               type="password"
               placeholder="Password"
               />
               </label>
               <button className="text-white text-sm flex flex-start border w-fit px-3 py-1 rounded-md bg-black hover:bg-gray-800 duration-300">
               Sign in
               </button>
               </form>
               </div>
               </div>

               
              
 
            </div>
            <div className=" p-2 md:p-4 lg:p-4 hidden md:flex flex-1 w-full h-screen bg-gunmetal">
               <div className="relative flex flex-col flex-1  w-full items-center ">
                    <div className="relative border w-full overflow-y-hidden flex flex-1 flex-col">
                    
                    <div className="icon-container rotate-12 absolute md:left-20 lg:bottom-8 lg:left-24 xl:left-32 2xl:w-[50%]">
                    <NextSvg
                         className="absolute text-white"
                         />
                    </div>

                    <div className="icon-container -rotate-12 md:left-8 md:bottom-6 lg:bottom-12 xl:right-12">
                    <PythonSvg
                    className="absolute"/>
                    </div>

                    <div className="icon-container rotate-6 md:bottom-4 xl:w-[40%]">
                    <AngularSvg className=" absolute "/>
                    </div>
                    
                    <div className="icon-container -rotate-12 md:left-12 lg:left-20 lg:bottom-8 xl:left-32 xl:w-[35%]">
                         <JavascriptSvg
                          className="absolute "/>
                    </div>

                         


                    </div>
                    <div className="flex flex-1 items-even justtify-center">
                    <h3>
                         bl
                    </h3>
                    </div>





               </div>

               <div className="relative flex flex-col flex-1  w-full items-center ">
                    <div className="flex flex-1 flex-row">
                         <h3>
                         <i className="devicon-nextjs-original-wordmark"></i>
                              Next r
                         </h3>
                    </div>
                    <div className="flex flex-1 items-even justtify-center">
                    <h3>
                         Next br
                    </h3>
                    </div>





               </div>
               </div>

        </div>
    )
}

export default SignIn


