import * as React from "react";
import { useState, useEffect, FunctionComponent } from "react";

import dataRatings from "./data.json";

type HelpRatingType = {
    ratings: RatingType[];
};

export type RatingType = {
    recordId: string;
    name: string;
    score: number;
    content: string;
};

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        //NOTE: ... no nie działa cos :(
        // try {
        const data: RatingType[] = JSON.parse(dataRatings);
        setRatings(data);
        // } catch (error) {
        // throw new Error(`Error: ${error}`);
        // }
    }, []);
    return (
        <div className="wrapper">
            <h1>Rating Stars</h1>
            <p></p>
            {/* <RatingList ratings={ratings} /> */}
        </div>
    );
};

export default App;
