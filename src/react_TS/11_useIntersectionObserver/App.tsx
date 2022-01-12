import * as React from "react";
import { FunctionComponent } from "react";
import Component from "./components/Component";
import "./css/style.css";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <Component />
            {/* <Component />
            <Component />
            <Component />
            <Component />
            <Component />
            <Component />
            <Component />
            <Component /> */}
        </div>
    );
};

export default App;
