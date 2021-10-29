import * as React from "react";
import { Component } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

interface IProps {}

interface IState {
    name: string;
    surname: string;
}
interface IIState {
    value: number;
}
class App extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { name: "", surname: "" };
    }

    render() {
        return (
            <Router>
                <div className="wrapper">
                    <h1>Application</h1>
                    Podaj liczbę: <input type="number" />
                    <AppSec></AppSec>
                </div>
            </Router>
        );
    }
}

class AppSec extends Component<IProps, IIState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    render() {
        return (
            <div>
                <p>Liczba to: {this.state.value}</p>
            </div>
        );
    }
}

export default App;
