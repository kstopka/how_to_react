import * as React from "react";
import { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import HomePage from "./HomePage";
import Login from "./Login";
import Loading from "./Loading";

import { RootState } from "../store";
import { useCredentialsFromApi } from "../App.hooks";

interface AuthenticationProps {}

const Authentication: FunctionComponent<AuthenticationProps> = () => {
    useCredentialsFromApi();
    const isLogged = useSelector((state: RootState) => state.status.isLogged);
    const { imBusy, errorMessage, error } = useSelector((state: RootState) => state.data);

    if (!imBusy) {
        return <Loading />;
    }

    if (error) {
        return <h1>{errorMessage}</h1>;
    }
    if (!isLogged) {
        return <Login />;
    }
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
};

export default Authentication;
