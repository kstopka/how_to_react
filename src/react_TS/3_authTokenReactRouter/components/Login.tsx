import * as React from "react";
import { useState, useEffect, useContext } from "react";
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

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeLogin = (e: any) => {
        const userName = e.target.value;
        // const error = Validator.throwErrorOnInvalidProperName(login, "error msg");
        // setuserNameField({ login, error });
        setUserName(userName);
    };
    const handleChangePassword = (e: any) => {
        //validacja
        const password = e.target.value;
        setPassword(password);
    };

    const { token, setToken } = useContext(MenuContext);
    const { credentials } = useCredentialsFromApi();

    useEffect(() => {
        console.log(credentials);
        const check = checkCredentials(credentials, userName, password);
        setToken(check);
        console.log(token);
    });
    // const handleFormSubmit = (e: { preventDefault: () => void }) => {
    //     e.preventDefault();
    //     // if (userName !== correctUserName || password !== correctPassword) {
    //     // alert("wrong login or passowrd");
    //     // }
    //     setToken(true);
    // };

    //NOTE: jeżeli jest zalogowany to wrzuca na home
    //NOTE: zmienia token na ten poprawny
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
                <input type="text" onChange={handleChangeLogin} />
                <p>User Password:</p>
                <input type="text" onChange={handleChangePassword} />
            </label>
        </div>
    );
};

export default Login;
