import * as React from "react";
import { useEffect, useContext, useReducer, useCallback } from "react";
// import Validator from "../Validator";
import { MenuContext } from "../hooks/useCredentialsContext";
import { useCredentialsFromApi } from "../App.hooks";
import { CredentialsType } from "../App.d";

// interface LoginProps {}
//NOTE: podczas loginu ma przejsc na home
//NOTE: jaki powienin być typ setToken

const checkCredentials = (credentials: CredentialsType[], login: string, password: string): boolean => {
    let permission = false;
    if (credentials !== undefined) {
        permission = credentials.some((element) => element.login === login && element.password === password);
    }
    return permission;
};

const reducerTakedCredentials = (state: any, action: { type: string; value?: string }) => {
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
    const [takedCredentials, dispatch] = useReducer(reducerTakedCredentials, initialCredentials);
    const { login, password } = takedCredentials;

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
        const check = checkCredentials(credentials, login, password);
        setToken(check);
    });

    //NOTE: jeżeli jest zalogowany to wrzuca na home
    //control inputs
    //uncontrol

    const onSubmit = useCallback(() => {
        //NOTE: logika
        if (!token) {
            return false;
        }

        // ...
    }, []);

    // const error = "testowy error";
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}></form>
            <label htmlFor="">
                {/* <small style={{ color: "red" }}>{error}</small> */}
                <p>User Login:</p>
                {/* onChange zmienić na on ...? w momencie wyjścia z okienka podświetla czy jest ok*/}
                <input type="text" onChange={handleChangeLogin} />
                <p>User Password:</p>
                <input type="text" onChange={handleChangePassword} />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </label>
        </div>
    );
};

export default Login;

//TODO: on submit form ma wysyłać setToken
//TODO: dodać error do dispatcch'a
//TODO: przerobic onChange
//TODO: zrobić validacje
