import * as React from "react";
import { FunctionComponent } from "react";
import { useCredentials } from "../hooks/useCredentials";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
    const { changeState, onSubmit } = useCredentials();
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
