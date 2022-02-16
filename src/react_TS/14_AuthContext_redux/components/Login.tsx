import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useCredentials } from "../App.hooks";

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
                    <input type="text" name="login" onChange={changeState} value={login.value} />
                    <small style={{ color: "red" }}>{login.errorMessage}</small>
                </label>
                <label htmlFor="">
                    <p>User Password:</p>
                    <input type="password" name="password" onChange={changeState} value={password.value} />
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
