"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import {ImageGalleryOne, ImageGalleryTwo, AuthGif } from './imports'


const SignUpPage = ({submitHandler, setAuthProcess, client}) => {
     const [userObject, setuserObject] = useState({Username:"", Password:"", Password2:""})
     const checkPassword = () => {
          const isRight = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,20}$/g.test(userObject.Password);
          console.log("checked")
          return isRight ? true : false 
          }
     const comparePassword = () => {
     if(userObject.Password === userObject.Password2) 
     {
          return checkPassword();
     }
     alert("Passwords must match")
     return false;
     }

     const handleInputChange = (event) => {
          setuserObject({
          ...userObject,
          [event.target.name]: event.target.value
          })
     }
     const handleSignUp = async (e) => {
          e.preventDefault();
          let userExists;

          try {
               userExists = await client.checkUsername(userObject);
          } catch (error) {
               console.log(error);
               return console.log("Error making request");
          }
          
          if(userExists.data == false)
          {
               const isPassword = comparePassword();

               if (isPassword) {
               // Sign up user
               try {
                    await client.signUp(userObject.Username, userObject.Password);
                    let userObject2 = {Username : userObject.Username, Password: userObject.Password}
                    await submitHandler(userObject2);
                    return;
               } catch (err) {
                    console.error(err);
               }
               } else {
               alert("Password must be: \n8-20 characters long.\ncontain at least one special character.\ncontain at least one number.\ncontain at least one capital and lowecase letter.")
               return;
               } 
          }

          alert("User name taken")
     };

     const handleLogin = () => {
          setAuthProcess(false);
          console.log("Sign In");
     };


     return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="p-2 md:p-4 relative flex flex-1 flex-col bg-gray-100 brightness-10 items-center justify-center h-screen ">
               
               <div className="">
               <div className="mb-10 flex flex-col justify-center items-center">
               <h3 className="text-5xl font-semibold">A new way to collaborate</h3>
               <p className="text-xs text-gray-500 mt-2">Sign up to become a member. Already have an account? <Link className="text-blue-600 text-xs" href="#">Sign in</Link></p>
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
           
                    </div>
              
               <input
               className="border rounded-md w-full p-1 border-gray-300 mb-4"
               name="password"
               type="password"
               placeholder="Password"
               />
               </label>

               <label for="Password2" className="">

               <div className="flex  items-center justify-between">
                    <p className="text-sm mb-2">Confirm password</p>
                 
                    </div>
              
                    <input
                    type="password"
                    name="Password2"
                    placeholder="Confrim Password"
                    className="border rounded-md w-full p-1 border-gray-300 mb-4"
                    onChange={handleInputChange}
                    value={userObject.Password2}
    
                    />
                     </label>



               <button className="text-white text-sm flex flex-start border w-fit px-3 py-1 rounded-md bg-black hover:bg-gray-800 duration-300">
            Create account
               </button>
               </form>
               </div>
               </div>

               
              
 
            </div>
            <div className=" p-2 md:p-4 lg:p-4 hidden md:flex flex-1 w-full h-screen bg-black">
               <div className="relative z-10 flex flex-col flex-1 ">
                <div>
                <h3 className="text-white flex justify-end">Project name</h3>
                </div>
                <div className="relative flex md:text-xl lg:text-3xl top-40 flex justify-center">
                <h3 className="relative text-white ">Work, Share, Collaborate</h3>
                </div>
               
              
              <div className="relative flex flex-1 w-full items-center justify-center ">
                                    {/* <Image
                    src={AuthGif}
                    className="absolute rounded-full"
             
                    style={{ width: '400px', height: '400px', objectFit: 'cover' }}/> */}
                    <video
                    className="absolute rounded-full"
                    width={400}
                    height={400}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{objectFit: 'cover'}}>
                <source src="/videos/auth-video.mp4" type="video/mp4" />
                    </video>

                </div>





               </div>


               </div>

        </div>
    )

};

export default SignUpPage;