import "./App.css";
import * as React from "react";
import { Component } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import Login from "./components/Login";
import SomeTesting from "./components/SomeTesting";

interface IProps {}

interface IState {
    name: string;
    surname: string;
}
class App extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { name: "", surname: "" };
        this.handleName = this.handleName.bind(this);
        this.handleSurname = this.handleSurname.bind(this);
    }

    private handleName(event: any) {
        this.setState({ name: event.target.value });
    }
    private handleSurname(event: any) {
        this.setState({ surname: event.target.value });
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
                    {/* <SomeTesting title="New Testing"></SomeTesting> */}
                    <div className="name">
                        Podaj Imię: <input type="text" name="name" onInput={this.handleName} />
                    </div>
                    <div className="surname">
                        Podaj Nazwisko: <input type="text" name="surname" onInput={this.handleSurname} />
                    </div>
                    <div>
                        <p>
                            Nazywasz się: {this.state.name} {this.state.surname}
                        </p>
                    </div>
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
