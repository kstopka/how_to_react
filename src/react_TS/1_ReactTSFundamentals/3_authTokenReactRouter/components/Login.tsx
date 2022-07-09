import { FunctionComponent } from "react";
import { useCheckCredentials } from "../hooks/useCheckCredentials";

const Login: FunctionComponent = () => {
    const { takedCredentials, handleChangeName, onSubmit } = useCheckCredentials();
    const { login, password } = takedCredentials;

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
