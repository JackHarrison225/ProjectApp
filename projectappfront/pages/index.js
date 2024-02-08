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

    useEffect(() => {
    }, [token]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
        setToken(token);
        }
    }, []);

    const login = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
    };

    const logout = () => {
        localStorage.setItem("token", null);
        setToken(null);
    };
    //#################################//  


    return (
 
        <div>
            
            
            {token? (
                <>
                    <NavBarAuth setLogIn={setLogIn}/>
                    <Dashboard setToken={setToken} client={client}/>
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