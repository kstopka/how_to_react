import * as React from "react";
import { FunctionComponent } from "react";
import Provider from "./Provider";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <Provider>
            <div className="app"></div>;
        </Provider>
    );
};

export default App;
