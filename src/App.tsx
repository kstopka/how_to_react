import "./App.css";
import * as React from "react";
import { Component, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import Login from "./components/Login";
import SomeTesting from "./components/SomeTesting";

interface IProps {}

interface IState {
    counter: number;
}
class App extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { counter: 0 };
    }
    increment() {
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    // const [token, setToken] = useState();

    // if (!token) {
    //     return <Login setToken={setToken} />;
    // }
    render() {
        return (
            <Router>
                <div className="wrapper">
                    <Link to="/">
                        <h1>Application</h1>
                    </Link>
                    <SomeTesting title="New Testing"></SomeTesting>
                    <button onClick={this.increment.bind(this)}>+</button>
                    <button onClick={this.increment.bind(this)}>-</button>
                    <h3>{`Clicked ${this.state.counter} times`}</h3>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/preferences">preferences</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                        <Route path="/preferences">
                            <Preferences />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
