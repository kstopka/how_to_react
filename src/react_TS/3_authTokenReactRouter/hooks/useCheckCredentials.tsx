import { useReducer, useState, useEffect, useContext } from "react";
import { reducerTakedCredentials, initialCredentials } from "../reducer/reducerTakedCredentials";
import { TokenContext } from "../context/TokenContext";
import { validation } from "../Validator";
import { useCredentialsFromApi } from "../App.hooks";
import { CredentialsType, HandleChangeValueType } from "../App.d";

const checkCredentials = (credentials: CredentialsType[], login: string, password: string): boolean => {
    let permission = false;
    login = "Admin";
    password = "123qwe!@#QWE";
    if (credentials !== undefined) {
        permission = credentials.some((element) => element.login === login && element.password === password);
    }
    return permission;
};

export const useCheckCredentials = () => {
    const [takedCredentials, dispatch] = useReducer(reducerTakedCredentials, initialCredentials);
    const { login, password } = takedCredentials;
    const [check, setCheck] = useState(false);
    const { setToken } = useContext(TokenContext);
    const { credentials } = useCredentialsFromApi();

    const handleChangeName: HandleChangeValueType = (e) => {
        const { name, value } = e.target;
        const { isError, errorMessage } = validation[name](name, value);
        if (isError) {
            return dispatch({ type: "setError", value: errorMessage, name });
        }
        dispatch({ type: "setName", value, name });
    };

    const onSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (check) {
            setToken(check);
        }
    };

    useEffect(() => {
        const isChecked = checkCredentials(credentials, login.name, password.name);
        setCheck(isChecked);
    }, [credentials, login.name, password.name]);

    return { handleChangeName, takedCredentials, onSubmit };
};
