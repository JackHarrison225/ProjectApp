import React, {useState, useEffect, useMemo, useContext} from 'react'


export const authContext = createContext()

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [user, setUser] = useState(null);

    const login = (userData)

    useEffect(() => {
    }, [authProcess])
}