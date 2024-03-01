import React from 'react';
import { useApiClient } from '../../contexts/ApiClientContext';
import NavBarAuth from "./NavBarAuth";
import NavBarNoAuth from "./NavBarNoAuth";
import {useRouter} from 'next/router'





const DynamicNav = () => {
    const router = useRouter()
    const {isAuthenticated} = useApiClient();
    const noNavBarPaths = ['/login', '/signup']

    return (
        !noNavBarPaths.includes(router.pathname) ?
             (isAuthenticated ? <NavBarAuth/> : <NavBarNoAuth/>) : null
    );


}

export default DynamicNav;