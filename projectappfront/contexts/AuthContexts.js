import React, {useState, useEffect, useMemo, useContext} from 'react'


export const authContext = createContext()

export const AuthProvider = ({children}) => {
    const [disabled, setDisabled] = useState(false);
    const [authProcess, setAuthProcess] = useState(false);
    const [userObject, setuserObject] = useState({Username:"", Password:""})

    useEffect(() => {
    }, [authProcess])
}