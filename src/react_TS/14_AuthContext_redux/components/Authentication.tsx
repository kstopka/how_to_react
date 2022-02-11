import * as React from "react";
import { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./HomePage";
import Login from "./Login";

import { RootState } from "../store";
import { useSelector } from "react-redux";
import Loading from "./Loading";

interface AuthenticationProps {}

const Authentication: FunctionComponent<AuthenticationProps> = () => {
    const isLogged = useSelector((state: RootState) => state.status.isLogged);
    const { imBusy } = useSelector((state: RootState) => state.data);

    // if (!imBusy) {
    //     return <Loading />;
    // }
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
