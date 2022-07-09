import * as React from "react";
import { FunctionComponent } from "react";
import Component from "./components/Component";
import { RefProvider } from "./context/context";
import "./css/style.css";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <RefProvider>
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
            </RefProvider>
        </div>
    );
};

export default App;
