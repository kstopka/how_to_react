import * as React from "react";
import { FunctionComponent } from "react";
import Home from "./Home";
import Login from "./Login";
import SecureLink from "./SecureLink";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
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
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/securelink">SecureLink</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/login">
                        <Login />
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
