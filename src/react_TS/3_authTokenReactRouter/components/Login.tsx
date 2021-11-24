import * as React from "react";
import { useState, useEffect } from "react";
import Validator from "../Validator";
import { AuthContextProvider } from "../authContext";

// interface LoginProps {}
//NOTE: podczas loginu ma przejsc na home
//NOTE: jaki powienin być typ setToken
const Login = ({ setToken }: { setToken: any }) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeLogin = (e: any) => {
        const userName = e.target.value;
        // const error = Validator.throwErrorOnInvalidProperName(login, "error msg");
        setUserName(userName);
    };
    const handleChangePassword = (e: any) => {
        const password = e.target.value;
        setPassword(password);
    };
    useEffect(() => {
        AuthContextProvider(userName, password);
    }, []);

    return (
        <div>
            <h1>Login</h1>
            {/* <form onSubmit={handleSubmit}></form> */}
            <label htmlFor="">
                {/* <small style={{ color: "red" }}>{error}</small> */}
                <p>User Login:</p>
                <input type="text" onChange={handleChangeLogin} />
            </label>
        </div>
    );
};

export default Login;
