'use client'
import React, {useState, useEffect, useContext} from 'react'
import {useApiClient} from '../contexts/ApiClientContext'
import { useRouter } from 'next/router';



export default function Landing ({props}){

    //#####  user authentication  #####//  
    const [token, setToken] = useState(null);
    const {client, checkToken} = useApiClient()

    const router = useRouter()
    
    // useEffect(() => { // should not be async, only checking and retrieving the token if it is present in local storage. 
    //     const tokenVerification = async () => {
    //         const storedToken = localStorage.getItem("token");
    //         if (storedToken) {
    //             const isValid = await checkToken(storedToken);
    //             if (isValid) {
    //                 router.push("/signup")
    //             } else {
    //                 router.push("/login")
    //             }
    //         } else {
    //             router.push("/home")
    //         }
    //     }
        
    //     tokenVerification()

    // }, []);




    return (
 
        <div>
        Redirecting....
        </div>
    )
}