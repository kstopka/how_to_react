import * as React from "react";
import { useState, useEffect, useContext, useReducer } from "react";
import Validator from "../Validator";
import { MenuContext } from "../hooks/useCredentialsContext";
import { useCredentialsFromApi } from "../App.hooks";
import { CredentialsType } from "../App.d";

// interface LoginProps {}
//NOTE: podczas loginu ma przejsc na home
//NOTE: jaki powienin być typ setToken

const checkCredentials = (credentials: CredentialsType[], userName: string, password: string): boolean => {
    let checking = false;
    if (credentials !== undefined) {
        checking = credentials.every((element) => element.login === userName && element.password === password);
    }
    return checking;
};

const reducer = (state: any, action: { type: string; value?: string }) => {
    switch (action.type) {
        case "setLogin": {
            return {
                ...state,
                login: action.value,
            };
        }
        case "setPassword": {
            return {
                ...state,
                password: action.value,
            };
        }
        case "setError": {
        }
    }
};

const initialCredentials: CredentialsType = {
    login: "",
    password: "",
};

const Login = () => {
    const [state, dispatch] = useReducer(reducer, initialCredentials);
    const { login, password } = state;

    const handleChangeLogin = (e: any) => {
        const login = e.target.value;
        // const error = Validator.throwErrorOnInvalidProperName(login, "error msg");
        dispatch({ type: "setLogin", value: login });
    };
    const handleChangePassword = (e: any) => {
        //validacja
        const password = e.target.value;
        dispatch({ type: "setPassword", value: password });
    };

    const { token, setToken } = useContext(MenuContext);
    const { credentials } = useCredentialsFromApi();

    useEffect(() => {
        console.log(credentials);
        const check = checkCredentials(credentials, login, password);
        setToken(check);
        console.log(token);
    });

    //NOTE: jeżeli jest zalogowany to wrzuca na home
    //control inputs
    //uncontrol

    // const onSubmit = useCallback(()=>{
    //     if(...){
    //         return false
    //     }

    //     ...
    // },[])

    // const error = "testowy error";
    return (
        <div>
            <h1>Login</h1>
            {/* <form onSubmit={handleSubmit}></form> */}
            <label htmlFor="">
                {/* <small style={{ color: "red" }}>{error}</small> */}
                <p>User Login:</p>
                {/* onChange zmienić na on ...? w momencie wyjścia z okienka podświetla czy jest ok*/}
                <input type="text" onChange={handleChangeLogin} />
                <p>User Password:</p>
                <input type="text" onChange={handleChangePassword} />
            </label>
        </div>
    );
};

export default Login;
