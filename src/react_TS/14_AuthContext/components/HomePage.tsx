import * as React from "react";
import { FunctionComponent, useContext } from "react";
import Cookies from "js-cookie";
import { AuthContext } from "../context/AuthContext";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
    const { setIsLogged } = useContext(AuthContext);

    const logout = () => {
        const cookiesNames = Cookies.get();
        const arrayCookiesNames = Object.keys(cookiesNames);
        arrayCookiesNames.forEach((item) => Cookies.remove(item));
        setIsLogged(false);
    };
    return (
        <div className="home-page">
            <h1>Home Page</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default HomePage;
