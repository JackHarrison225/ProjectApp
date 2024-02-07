"use client";

import { useState, useEffect } from "react";

const SignUp = ({submitHandler, setAuthProcess, client}) => {
     const [userObject, setuserObject] = useState({Username:"", Password:"", Password2:""})
     const checkPassword = () => {
          const isRight = /^(?=.*[a-zA-Z0-9])(?=.*[\W_]).{8,20}$/g.test(userObject.Password);
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
          console.log(userExists.data)

     } catch (error) {
          console.log(error);
          console.log("Error making request");
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
          <div className="w-screen h-screen rounded-2xl flex flex-col-reverse items-center">
               <div className="w-[50px] bg-[#be7301] mx-[100px] h-[200px] border-x-[#000000] border-x-[3px] gap-[10px] z-0"></div>
               <form
                    onSubmit={handleSignUp}
                    className="flex h-[275px] w-[250px] flex-col items-center"
                    >
                    
                         <div className="flex w-full flex-col h-[75px] ml-[-10px] mr-[10px] border-[3px] border-black rounded-b-lg bg-[#cc8e31] rounded-t-2xl pt-[5px] pb-[5px] border-3px">
                              <label for="Username" className="mx-[12%]">Username:</label>
                              <input
                              type="text"
                              name="Username"
                              onChange={handleInputChange}
                              value={userObject.Username}
                              className="mx-[10%] border-[2px] border-black rounded-xl mb-[5px] text-center" />
                         </div>
                    <div className="h-[10px] bg-[#be7301] w-[50px] border-x-[3px] border-black">
                    </div>
                    {/* Passwords */}
                    
                    <div className="flex flex-col pt-[5px] pb-[5px] w-full h-[75px] bg-[#cc8e31] ml-[5px] border-[3px] border-black mr-[-1px] rounded-lg">
                         <label for="Password" className="mx-[12%]">Password:</label>
                         <input
                         type="password"
                         name="Password"
                         onChange={handleInputChange}
                         value={userObject.Password}
                         className="mx-[10%] border-[2px] border-black rounded-xl text-center"
                         />
                    </div>
                    <div className="h-[10px] bg-[#be7301] w-[50px] border-x-[3px] border-black"></div>
                    {/* Authorisation */}
                    <div className="flex pt-[5px] flex-col w-full h-[75px] bg-[#cc8e31] ml-[-2px] mr-[2px] border-[3px] p-[5px] rounded-lg border-black">
                    <label for="Password2" className="mx-[12%]">Confirm Password:</label>
                         <input
                         type="password"
                         name="Password2"
                         onChange={handleInputChange}
                         value={userObject.Password2}
                         className="mx-[10%] border-[2px] border-black rounded-xl text-center"
                         />
                    </div>
                    <div className="h-[10px] bg-[#be7301] w-[50px] border-x-[3px] border-black"></div>
                    <div className="ml-[-7px] mr-[7px] flex pt-[5px] w-full h-[75px] bg-[#cc8e31] rounded-t-lg rounded-b-2xl border-black border-[3px] items-center text-center">
                         <button type="submit" className="h-[40px] bg-green-500 w-full mx-[10px] mb-[5px] rounded-xl border-black border-[3px] my-[2px]">
                         Sign Up
                         </button>
                         <a className="w-full text-center pt-[5px] h-[40px]" onClick={handleLogin}>Log In?</a>
                    </div>
               </form>
               <div className="w-[50px] bg-[#be7301] mx-[100px] h-[50px] rounded-t-lg border-[#000000] border-t-[3px] border-x-[3px]" />
          </div>
     );};

export default SignUp;