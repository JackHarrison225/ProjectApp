"use client";

import { useState, useEffect } from "react";
import LogInPage from '../../components/authpages/SignIn'
import SignUpPage from '../../components/authpages/SignUp'
import { ApiClient } from "@/app/ApiClient";
import { Router, useRouter } from "next/router";

const AuthoriseUser = () => {
     const [disabled, setDisabled] = useState(false);
     const [authProcess, setAuthProcess] = useState(false);
     const router = useRouter()

     useEffect(() => {
     }, [authProcess])

     const [token, setToken] = useState(null)
     const [LogIn, setLogIn] = useState(false)
     
     const client = new ApiClient(
         () => token,
         () => logout()
     );
     
 
     const checkToken = async(token) =>
     {
          let real = await client.checkToken(token)
          if (!real){
               logout()
          }
          else {
               localStorage.setItem("token", token);
               setTimeout(function(){
                    setToken(token);
               }, 50);
               router.push("/projects")
          }
     }
     
     const loggedIn = (token) => {
          localStorage.setItem("token", token);
          console.log(token)
          router.push("/projects")
     };
 
     const logout = () => {
         setToken(null);
         localStorage.removeItem("token");
     };
     const submitHandler = async(e) => {
          setDisabled(true);
          console.log("Sent to api clinet")
          console.log(e)
          await client.login(e.Username, e.Password)
          .then((response) => {
               setDisabled(false);
               loggedIn(response.data.Token)
               checkToken(token)
          }).catch(() => {
               alert("Wrong Username or Password.\nTry again.")
               setDisabled(false);
          })
      }
      
     const submitHandlerSignUp = async(UserObject) => 
     {
          await client.login(UserObject.Username, UserObject.Password).then((response) => {
          loggedIn(response.data.Token)
          console.log(response.data.Token)
          }).catch((error) => {
               console.error(error)
          })
     }

     return (
          <div id="authorisation" className="h-screen w-screen flex flex-col justify-center items-center">
               {!authProcess ? (
                    <LogInPage submitHandler={submitHandler} client setAuthProcess={setAuthProcess}/>
                         ) : (
                    <SignUpPage submitHandler={submitHandlerSignUp} client setAuthProcess={setAuthProcess} />
               )}
          </div>
     );
};

export default AuthoriseUser;