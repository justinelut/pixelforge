"use client"

import { createContext, useState, useEffect } from 'react';
import { useStore } from "../../store/store";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const { loginToken } = useStore()

    console.log(loginToken)

    useEffect(() => {
        if (loginToken) {
            setUser({ token: loginToken });
        }
    }, []);

    function login(token) {
        setUser({ token });
        localStorage.setItem('logintoken', token);
    }

    function logout() {
        setUser(null);
        localStorage.removeItem('logintoken');
    }

    const value = {
        user,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
