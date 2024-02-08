"use client";

import { useState, useEffect } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AuthoriseUser = (props) => {
     const [disabled, setDisabled] = useState(false);
     const [authProcess, setAuthProcess] = useState(false);

     useEffect(() => {
     }, [authProcess])

     const submitHandler = (e) => {
          
          setDisabled(true);
          console.log("Sent to api clinet")
          console.log(e)
          props.client.login(e.Username, e.Password).then((response) => {
              setDisabled(false);
              props.loggedIn(response.data.Token)
              console.log(response.data.Token)
          }).catch(() => {
            alert("Wrong Username or Password.\nTry again.")
            setDisabled(false);
          })
      }
      
     const submitHandlerSignUp = (UserObject) => 
     {
          props.client.login(UserObject.Username, UserObject.Password).then((response) => {
          props.loggedIn(response.data.Token)
          console.log(response.data.Token)
          }).catch((error) => {
               console.error(error)
          })
     }

     return (
          <div id="authorisation" className="h-screen w-screen flex flex-col justify-center items-center">
               {!authProcess ? (
                    <SignIn submitHandler={submitHandler} setAuthProcess={setAuthProcess} />
                         ) : (
                    <SignUp submitHandler={submitHandlerSignUp} client={props.client} setAuthProcess={setAuthProcess} />
               )}
          </div>
     );
};

export default AuthoriseUser;