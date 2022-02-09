import * as React from "react";
import { createContext, useEffect, useState } from "react";
import { AuthContextType } from "../App.d";
import Cookies from "js-cookie";

const AuthContextInitial: AuthContextType = {
    isLogged: false,
    setIsLogged: () => {},
};

export const AuthContext = createContext(AuthContextInitial);

export const AuthProvider = ({ children }: { children: any }) => {
    const [isLogged, setIsLogged] = useState(false);
    const correctEmail = "jankowalski@gmail.com";
    const correctPassword = "admin12345@";
    // Cookies.set("jankowalski@gmail.com", "admin12345@");
    useEffect(() => {
        const cookiePassword = Cookies.get(correctEmail);
        if (cookiePassword === correctPassword) {
            setIsLogged(true);
        }
    }, []);

    return <AuthContext.Provider value={{ isLogged, setIsLogged }}>{children}</AuthContext.Provider>;
};
