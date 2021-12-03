import * as React from "react";
import { FunctionComponent, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import SecureLink from "./components/SecureLink";
import Logout from "./components/Logout";
import { TokenContext, TokenProvider } from "./context/TokenContext";
// import { useCredentialsContext } from "./App.hooks";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    //context
    // provaider
    // const [token, setToken] = useState(false); // context
    const { token, setToken } = useContext(TokenContext);

    if (!token) {
        return <Login />;
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
                        <Logout />
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

interface WrapperProps {}

const Wrapper: FunctionComponent<WrapperProps> = () => {
    return (
        <TokenProvider>
            <App></App>
        </TokenProvider>
    );
};

export default Wrapper;

// const goodBearerToken = "f3823903b2dd6e35243b1bbe5a14f651";
// const badBearerToken = "1c9de95d445fd0824b3bcf1def5f7bfb";
