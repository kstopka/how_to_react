import * as React from "react";
import { useState, useEffect, FunctionComponent } from "react";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <h1>Rating Stars</h1>
            <p></p>
            {/* <RatingList ratings={ratings} /> */}
        </div>
    );
};

export default App;
