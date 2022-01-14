import * as React from "react";
import { FunctionComponent } from "react";
import GeoFindMe from "./componentes/geoFindMe";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <GeoFindMe />
        </div>
    );
};

export default App;
