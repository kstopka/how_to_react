import * as React from "react";
import { FunctionComponent, useEffect, useState } from "react";
import "./css/App.css";
import GridWrapper from "./components/GridWrapper";

interface AppProps {}

//contextAPI - ilość elementów w tablicy
// {
// array.lenght:
// columns: 4
// rows: array.lenght/columns -> raczej do poprawy ale jakoś tak 21/4 ma być 6
// }
const App: FunctionComponent<AppProps> = () => {
    const [widthOfWindow, setWidthOfWindow] = useState(() => window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setWidthOfWindow(window.innerWidth));
        // on device orientation change

        return () => {
            // remove ...
        };
    }, [widthOfWindow]);
    return (
        <div>
            <h1>Masonry Grid</h1>
            <GridWrapper width={widthOfWindow} />
        </div>
    );
};

export default App;
