import React from 'react'
import Home from './projects/index';
import UnAuthHomePage from '../components/UnAuthHomePage'
import AuthHomePage from '../components/AuthHomePage'

export default function Landing (){
    return (
 
        <div>
        <AuthHomePage />
        {/* <UnAuthHomePage/> */}

        </div>
    )
}