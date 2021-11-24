import * as React from "react";
import { useState, useEffect, createContext } from "react";
import { useCredentialsFromApi } from "./App.hooks";

export const AuthContext = createContext("");

const IsAuth = () => {
    const { credentials } = useCredentialsFromApi();
    console.log(credentials);
    return true;
};

export const AuthContextProvider = (userName: string, password: string) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const setAuth = (boolean: boolean | ((prevState: boolean) => boolean)) => {
        setIsAuthenticated(boolean);
    };

    const isAuth = (userName = "admin", password = "123") => {};

    console.log(isAuth);
};
