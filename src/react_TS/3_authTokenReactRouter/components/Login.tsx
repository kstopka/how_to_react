import { useEffect, useContext, useReducer, FunctionComponent, useState } from "react";
import Validator from "../Validator";
import { reducerTakedCredentials, initialCredentials } from "../reducer/reducerTakedCredentials";
import { TokenContext } from "../context/TokenContext";
import { useCredentialsFromApi } from "../App.hooks";
import { CredentialsType } from "../App.d";

//TODO: oddzielić logię po za UI
const checkCredentials = (credentials: CredentialsType[], login: string, password: string): boolean => {
    let permission = false;
    login = "Admin";
    password = "123qwe!@#QWE";
    if (credentials !== undefined) {
        permission = credentials.some((element) => element.login === login && element.password === password);
    }
    return permission;
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

    const { setToken } = useContext(TokenContext);
    const { credentials } = useCredentialsFromApi();

    useEffect(() => {
        const isChecked = checkCredentials(credentials, login.name, password.name);
        setCheck(isChecked);
    }, [credentials, login.name, password.name, setToken]);

    //TODO: jeżeli jest zalogowany to wrzuca na home
    //control inputs
    //uncontrol

    // const onSubmitV2 = useCallback(() => {
    //     //TODO: logika
    //     setToken(true);
    //     // ...
    // }, []);

    const onSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (check) {
            setToken(check);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="">
                    <p>User Login:</p>
                    <input type="text" name="login" onBlur={handleChangeName} />
                    <small style={{ color: "red" }}>{login.errorMessage}</small>
                </label>
                <label htmlFor="">
                    <p>User Password:</p>
                    <input type="password" name="password" onBlur={handleChangeName} />
                    <small style={{ color: "red" }}>{password.errorMessage}</small>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
