import { useState, useEffect } from "react";
import {useRouter} from 'next/router'
import { Inter } from "next/font/google";
import { ProjectProvider } from '../contexts/ProjectsContexts'
import Head from 'next/head';
import NavBarAuth from "@/components/navcomponents/NavBarAuth";
import NavBarNoAuth from "@/components/navcomponents/NavBarNoAuth";
import { ApiClient } from "@/app/ApiClient";

import '../app/globals.css'

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  const [token, setToken] = useState(null);
  const [LogIn, setLogIn] = useState(false)
  const [HasToken, setHasToken] = useState(false)

  const client = new ApiClient(
    () => token,
    () => logout()
  );

  const checkToken = async() =>
  {
    if(token === null)
    {
      let storedToken = localStorage.getItem("token")
      
        storedToken = localStorage.getItem("token")
      
      console.log("storedToken")
      console.log(storedToken)
      let real = await client.checkToken(storedToken)
      if (real.data == true){
          console.log("Set Token")
          setToken(storedToken)
          setHasToken(true)
      }
      else
      {
        localStorage.removeItem("token")
        //router.push("/login")
      }
    }
    else
    {
      let real = await client.checkToken(token)
      if (real.data == true){
        setHasToken(true)
        setToken(token)
      }
      else
      {
        localStorage.removeItem("token")
        //router.push("/login")
      }
    }
  }
  
  const noNavBarPaths = ['/login', '/signup']
 
  useEffect(()=>{
    console.log(token)
    setTimeout(function(){
      checkToken()
    }, 500);
    console.log("After " + token)
  },[token])
  
  useEffect(()=>{
    setTimeout(function(){
      checkToken()
    }, 500);
    document.body.className = inter.className;
  },[])
  
  const logout = ()=>{
    console.log("logout")
    localStorage.setItem("token", null)
    setToken(null)
  }


  return (
    <>
      <ProjectProvider>
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/devicon/icons/devicon/devicon.min.css" />
        </Head>
        {!noNavBarPaths.includes(router.pathname)? (
          HasToken? (
              <NavBarAuth logout={logout}/>
            ):(
              <NavBarNoAuth />
            )
          
          ):(
            <></>
          )
        }
        
        <Component {...pageProps} />
      </ProjectProvider>

          {/* <ProjectProvider>
            <Component {...pageProps} />
          </ProjectProvider> */}
    </>
  );
}

export default MyApp;

 