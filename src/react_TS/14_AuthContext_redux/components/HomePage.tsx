import * as React from "react";
import { FunctionComponent } from "react";
import { useCredentials } from "../hooks/useCredentials";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
    const { logout } = useCredentials();
    return (
        <div className="home-page">
            <h1>Home Page</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default HomePage;
