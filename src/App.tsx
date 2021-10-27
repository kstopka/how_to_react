import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";

function App() {
    const [token, setToken] = useState();

    // if (!token) {
    //     return <Login setToken={setToken} />;
    // }
    return (
        <div className="wrapper">
            <h1>Application</h1>
            <Router>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/preferences">
                        <Preferences />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
