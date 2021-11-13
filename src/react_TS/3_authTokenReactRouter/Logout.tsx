import * as React from "react";

// interface LogoutProps {}

//NOTE: podaczas logouta ma przejść na login

const Logout = ({ setToken }: { setToken: any }) => {
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
