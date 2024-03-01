

import React, { useState, useEffect } from "react";
import {useRouter} from 'next/router'
import { Inter } from "next/font/google";
import { ProjectProvider } from '../contexts/ProjectsContexts'

import DynamicNav from "@/components/navcomponents/DynamicNav";
import NavBarAuth from "@/components/navcomponents/NavBarAuth";
import NavBarNoAuth from "@/components/navcomponents/NavBarNoAuth";

import {ApiClientProvider, useApiClient} from '../contexts/ApiClientContext';
import {ApiClient} from '@/utils/ApiClient'

import '../app/globals.css'

const apiClient = new ApiClient()

const inter = Inter({ subsets: ["latin"] });





function MyApp({ Component, pageProps }) {

  const router = useRouter()

  const [token, setToken] = useState(null);
  // const [LogIn, setLogIn] = useState(false)
  





  useEffect(() => {


    const getStoredToken = async () => {
      const storedToken = localStorage.getItem("token")
      

      console.log("Logged token from _app.js", storedToken)
      if(storedToken) {
        setToken(storedToken)
      
      } else {
        setToken(null)
      }
    } 

    getStoredToken()
  }, [])
  


 

  
  useEffect(()=>{
 
    document.body.className = inter.className;
  },[])




  return (
    
    <ApiClientProvider client={apiClient}>
      <>
      <ProjectProvider>

      <DynamicNav/>
        <Component {...pageProps} />
      </ProjectProvider>
      </>
      </ApiClientProvider>
    
  );
}

export default MyApp;

 