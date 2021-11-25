import * as React from "react";
import { useEffect, useContext, useReducer, useCallback, FunctionComponent } from "react";
import Validator from "../Validator";
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

const reducerTakedCredentials = (state: any, action: { type: string; value?: string; target?: any }) => {
    switch (action.type) {
        case "setName": {
            return {
                ...state,
                [action.target]: {
                    name: action.value,
                    error: false,
                    errorMessage: "",
                },
            };
        }
        case "setError": {
            return {
                ...state,
                [action.target]: {
                    error: true,
                    errorMessage: action.value,
                },
            };
        }
    }
};

const initialCredentials = {
    login: {
        value: "",
        error: false,
        errorMessage: "",
    },
    password: {
        value: "",
        error: false,
        errorMessage: "",
    },
};

const Login: FunctionComponent = () => {
    const [takedCredentials, dispatch] = useReducer(reducerTakedCredentials, initialCredentials);
    const { login, password } = takedCredentials;

    const handleChangeLogin = (e: any) => {
        const login = e.target.value;
        const { isError, errorMessage } = Validator.throwErrorOnInvalidProperName(login, "error msg login");
        if (isError) {
            return dispatch({ type: "setError", value: errorMessage, target: "login" });
        }

        dispatch({ type: "setName", value: login, target: "login" });
    };
    const handleChangePassword = (e: any) => {
        const password = e.target.value;
        const { isError, errorMessage } = Validator.throwErrorOnWeakPassword(password, "error msg password");
        if (isError) {
            return dispatch({ type: "setError", value: errorMessage, target: "password" });
        }
        dispatch({ type: "setName", value: password, target: "password" });
    };

    const { token, setToken } = useContext(MenuContext);
    const { credentials } = useCredentialsFromApi();

    useEffect(() => {
        const check = checkCredentials(credentials, login.name, password.name);
        setToken(check);
    });

    //NOTE: jeżeli jest zalogowany to wrzuca na home
    //control inputs
    //uncontrol

    const onSubmitV2 = useCallback(() => {
        //NOTE: logika
        // setToken(true);
        // ...
    }, []);

    const onSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (!token) {
            alert("wrong login or password");
        }
        setToken(true);

        // ...
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}></form>
            <form onSubmit={onSubmitV2}></form>s
            <label htmlFor="">
                {/* onChange zmienić na on ...? w momencie wyjścia z okienka podświetla czy jest ok*/}
                <p>User Login:</p>
                <input type="text" onChange={handleChangeLogin} />
                <small style={{ color: "red" }}>{login.errorMessage}</small>
                <p>User Password:</p>
                <input type="password" onChange={handleChangePassword} />
                <small style={{ color: "red" }}>{password.errorMessage}</small>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </label>
        </div>
    );
};

export default Login;

//TODO: on submit form ma wysyłać setToken -
//TODO: dodać error do dispatch'a +
//TODO: przerobic onChange: zmienić na on ...? w momencie wyjścia z okienka podświetla czy jest ok -
//TODO: zrobić validacje +/-
//TODO: przerobić validacje aby zwracała msg
