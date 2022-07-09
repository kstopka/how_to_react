import * as React from "react";
import { FunctionComponent } from "react";
import ShowMyLocation from "./componentes/ShowMyLocation";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <ShowMyLocation />
        </div>
    );
};

export default App;
