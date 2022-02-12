import * as React from "react";
import { FunctionComponent } from "react";
import Provider from "./Provider";
import { useContextState } from "./App.hooks";
interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    useContextState(["text", "number"]);
    return (
        // <Provider>
        <div className="app"></div>
        // </Provider>
    );
};

export default App;
