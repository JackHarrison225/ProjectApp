import {createContext, useEffect, useMemo, useContext, useState} from 'react';
import { useRouter } from 'next/router';

import { ApiClient } from '@/utils/ApiClient';

const ApiClientContext = createContext({
    client: null,
    logout: () => {},
})

export const useApiClient = () => useContext(ApiClientContext)

export const ApiClientProvider = ({children}) => {
    const router = useRouter()

    const client = useMemo(() => new ApiClient(
        () => localStorage.getItem("token"),
        () => logout()

    ), [])

    

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [tokenStore, setTokenStore] = useState(null)

    
        
    const logout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false)
        router.push("/login")
    }

    useEffect(() => { // should not be async, only checking and retrieving the token if it is present in local storage. 
        const tokenVerification = async () => {
            const storedToken = localStorage.getItem("token");
            console.log(storedToken)
            if (storedToken) {
                const isValid = await checkToken(storedToken);
                checkToken(storedToken);
                setTokenStore(storedToken)
                
                setIsAuthenticated(isValid)
           
                // if (isValid) {
                    
                //     router.push("/projects")
                // } else {
                //     router.push("/login")
                // }
            } else {
                setIsAuthenticated(false)
                router.push("/login")
            }
        }
        
        tokenVerification()


    }, []);




    const checkToken = async(token) =>
    {
         let real = await client.checkToken(token)
         setIsAuthenticated(real)
        
         if (!real){
              logout()
              return false;
         } 
         return true;
    }

    useEffect(() => {
        console.log("Updated isAuthenticated state:", isAuthenticated);

    }, [isAuthenticated]);
  



    return (
        <ApiClientContext.Provider value={{ client, logout, checkToken, isAuthenticated, setIsAuthenticated }}>
          {children}
        </ApiClientContext.Provider>
      );
    
}


