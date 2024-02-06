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
     console.log("Sign Up");
     };


     return (
          <div className="">
               <form
                    onSubmit={handleSignUp}
                    className=""
               >
                    <div className="">
                         {/* Username */}
                         <div className="">
                              <label id="username">Username</label>
                              <input
                                   type="text"
                                   name="Username"
                                   onChange={handleInputChange}
                                   value={userObject.Username}
                                   className=""
                              />
                         </div>
                         {/* Passwords */}
                         <div className="">
                              <label for="password">Password</label>
                              <input
                                   type="password"
                                   name="Password"
                                   onChange={handleInputChange}
                                   value={userObject.Password}
                                   className=""
                              />
                         </div>

                         {/* Confirm Password */}
                         <div className="">
                              <label for="password">Confirm Password</label>
                              <input
                                   type="password"
                                   name="Password2"
                                   onChange={handleInputChange}
                                   value={userObject.Password2}
                                   className=""
                              />
                         </div>

                         {/* Authorisation */}
                         <div className="">
                              <button className="">
                                   Sign Up
                              </button>
                              <p className="" onClick={handleLogin}>Login?</p>
                         </div>
                    </div>
               </form>
          </div>
     );};

export default SignUp;