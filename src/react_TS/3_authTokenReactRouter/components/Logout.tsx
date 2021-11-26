import * as React from "react";
import { useContext } from "react";
import { TokenContext } from "../context/TokenContext";

const Logout = () => {
    const { setToken } = useContext(TokenContext);

    const handleClickLogout = () => {
        setToken(false);
    };
    return (
        <div>
            <h1>Logout</h1>
            <button onClick={handleClickLogout}>Logout</button>
        </div>
    );
};

export default Logout;
