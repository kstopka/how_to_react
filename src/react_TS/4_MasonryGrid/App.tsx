import * as React from "react";
import { FunctionComponent } from "react";
import "./css/App.css";
import GridWrapper from "./components/GridWrapper";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    console.log(`ok`);
    const gridwrapped: Element | null = document.querySelector(".gridwrapped");

    return (
        <div>
            <h1>Masonry Grid</h1>
            <div className="gridwrapped">
                <GridWrapper />
            </div>
        </div>
    );
};

export default App;
