'use client'
import React, {useState, useEffect} from 'react'

import NavBarAuth from '../components/navcomponents/NavBarAuth'

import NavBarNoAuth from '../components/navcomponents/NavBarNoAuth'

import Home from './projects/index';
import HomePage from '../components/HomePage'

import {ApiClient} from '../app/ApiClient'

import Dashboard from "../components/dashboard";
import AuthoriseUser from "../components/userComponants/authbox";

export default function Landing ({props}){

    //#####  user authentication  #####//  
    const [token, setToken] = useState(null);
    const [LogIn, setLogIn] = useState(false)
    
    const client = new ApiClient(
        () => token,
        () => logout()
    );
    
    useEffect(async() => {
        const token = localStorage.getItem("token");
        if (token) {
        const val = await client.checkToken(token);
        console.log(val.data)
        if (val.data == true)
        {
            setToken(token)
        }
        else{
            localStorage.removeItem("token")
        }
        }
    }, []);

    
    const login = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
    };

    const checkToken = (token) =>
    {
        let real = client.checkToken(token)
        if (real == false){
            logout()
        }
    }

    useEffect(() => {
        
    }, [token]);

    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
    };
    //#################################//  


    return (
 
        <div>
            
            
            {token? (
                <>
                    <NavBarAuth setLogIn={setLogIn} logOut={logout} />
                    <Dashboard client={client}/>
                </>
            
            ) : (
                LogIn?(
                    <>
                        <AuthoriseUser loggedIn={(token) => login(token)} client={client} />
                    </>
                ):(
                    <>
                        <NavBarNoAuth setLogIn={setLogIn}/>
                        <HomePage />
                    </>
                )
            )}
        
        
        </div>
    )
}