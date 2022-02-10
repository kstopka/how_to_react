import * as React from "react";
import { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./HomePage";
import Login from "./Login";

interface AuthenticationProps {}

const Authentication: FunctionComponent<AuthenticationProps> = () => {
    const isLogged = false;
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
