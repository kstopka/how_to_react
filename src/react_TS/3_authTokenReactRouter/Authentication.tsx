import * as React from "react";
import { FunctionComponent, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import SecureLink from "./SecureLink";
import Logout from "./Logout";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    const [token, setToken] = useState(false);

    if (!token) {
        return <Login setToken={setToken} />;
    }

    return (
        <Router>
            <div>
                <h1>Authentication React Router Hook</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                        <li>
                            <Link to="/securelink">SecureLink</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/logout">
                        <Logout setToken={setToken} />
                    </Route>
                    <Route path="/securelink">
                        <SecureLink />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
