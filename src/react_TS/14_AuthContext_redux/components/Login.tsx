import * as React from "react";
import { FunctionComponent, useEffect } from "react";
import { useSelector } from "react-redux";
import { useCredentials } from "../hooks/useCredentials";
import { RootState } from "../store";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
    const { changeState, onSubmit } = useCredentials();
    const { login, password } = useSelector((state: RootState) => state.status);
    return (
        <div className="login">
            <h1>Login Page</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="">
                    <p>User Login:</p>
                    <input type="text" name="login" onBlur={changeState} />
                    <small style={{ color: "red" }}>{login.errorMessage}</small>
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
