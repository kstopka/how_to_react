import * as React from "react";
import { FunctionComponent } from "react";
import RatingStars from "./components/RatingStars";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <RatingStars />
        </div>
    );
};

export default App;
