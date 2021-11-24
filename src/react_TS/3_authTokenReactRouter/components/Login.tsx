import * as React from "react";
import { useState } from "react";
import Validator from "../Validator";

// interface LoginProps {}
//NOTE: podczas loginu ma przejsc na home
//NOTE: jaki powienin być typ setToken
const Login = ({ setToken }: { setToken: any }) => {
    // const [userName, setUserName] = useState("");
    // const [password, setPassword] = useState("");

    const [userNameField, setuserNameField] = useState({
        login: "",
        error: true,
    });

    const handleChangeLogin = (e: any) => {
        const login = e.target.value;
        const error = Validator.throwErrorOnInvalidProperName(login, "error msg");
        setuserNameField({ login, error });
    };
    // const handleChangePassword = (e: any) => {
    //     //validacja
    //     const password = e.target.value;
    //     setPassword(password);
    // };
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

    const error = "testowy error";
    return (
        <div>
            <h1>Login</h1>
            {/* <form onSubmit={handleSubmit}></form> */}
            <label htmlFor="">
                <small style={{ color: "red" }}>{error}</small>
                <p>User Login:</p>
                <input type="text" onChange={handleChangeLogin} />
            </label>
        </div>
    );
};

export default Login;
