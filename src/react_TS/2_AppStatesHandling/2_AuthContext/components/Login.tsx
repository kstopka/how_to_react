import * as React from "react";
import { FunctionComponent, useState } from "react";
import Cookies from "js-cookie";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const changeState = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;

        if (name === "login") {
            setLogin(value);
        }
        if (name === "password") {
            setPassword(value);
        }
    };
    const onSubmit = () => {
        // Cookies.set(login, password);
        Cookies.set("jankowalski@gmail.com", "admin12345@");
    };
    return (
        <div className="login">
            <h1>Login Page</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="">
                    <p>User Login:</p>
                    <input type="text" name="login" onBlur={changeState} />
                </label>
                <label htmlFor="">
                    <p>User Password:</p>
                    <input type="password" name="password" onBlur={changeState} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
