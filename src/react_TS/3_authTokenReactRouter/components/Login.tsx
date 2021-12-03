import * as React from "react";
import { useEffect, useContext, useReducer, FunctionComponent, useState } from "react";
import Validator from "../Validator";
import { TokenContext } from "../context/TokenContext";
import { useCredentialsFromApi } from "../App.hooks";
import { CredentialsType } from "../App.d";

//TODO: oddzielić logię po za UI
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
    const [check, setCheck] = useState<boolean>(false);

    const handleChangeName = (e: any | string) => {
        const name = e.target.value;
        const typeOfCredentials: string = e.target.name;

        if (typeOfCredentials === "login") {
            const { isError, errorMessage } = Validator.whetherTheNamePropertyIsCorrect(
                name,
                `error msg ${typeOfCredentials}`
            );
            setDispatch(isError, errorMessage, typeOfCredentials, name);
        } else if (typeOfCredentials === "password") {
            const { isError, errorMessage } = Validator.whetherThePasswordPropertyIsCorrect(
                name,
                `error msg ${typeOfCredentials}`
            );
            setDispatch(isError, errorMessage, typeOfCredentials, name);
        }
    };

    const setDispatch = (isError: boolean, errorMessage: string, typeOfCredentials: string, name: string) => {
        if (isError) {
            return dispatch({ type: "setError", value: errorMessage, target: typeOfCredentials });
        }
        dispatch({ type: "setName", value: name, target: typeOfCredentials });
    };

    const { token, setToken } = useContext(TokenContext);
    const { credentials } = useCredentialsFromApi();

    useEffect(() => {
        const isChecked = checkCredentials(credentials, login.name, password.name);
        setCheck(isChecked);
        setToken(true);
    }, [credentials, login.name, password.name, setToken]);

    //NOTE: jeżeli jest zalogowany to wrzuca na home
    //control inputs
    //uncontrol

    // const onSubmitV2 = useCallback(() => {
    //     //NOTE: logika
    //     setToken(true);
    //     // ...
    // }, []);

    const onSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        console.log(token);
        setToken(true);
        if (check) {
            setToken(check);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="">
                    {/* onChange zmienić na on ...? w momencie wyjścia z okienka podświetla czy jest ok*/}
                    <p>User Login:</p>
                    <input type="text" name="login" onChange={handleChangeName} />
                    <small style={{ color: "red" }}>{login.errorMessage}</small>
                    <p>User Password:</p>
                    <input type="password" name="password" onChange={handleChangeName} />
                    <small style={{ color: "red" }}>{password.errorMessage}</small>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </label>
            </form>
        </div>
    );
};

export default Login;

//TODO: on submit form ma wysyłać setToken -
//TODO: przerobic onChange: zmienić na on ...? w momencie wyjścia z okienka podświetla czy jest ok -
//TODO: Submit zrovic na callback
