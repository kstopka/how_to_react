import * as React from "react";
import { useState, useEffect, FunctionComponent } from "react";
import RatingList from "./RatingList";
import dataRatings from "./data.json";
import { RatingType, ObjRatingType } from "./App";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    const [ratings, setRatings] = useState(dataRatings);

    useEffect(() => {
        //NOTE: ... no nie działa cos :(
        // const data: RatingType[] = dataRatings.ratings;
        const data: ObjRatingType = dataRatings;
        setRatings(data);
        // console.log(typeof data);
        // console.log(Array.isArray(data));
    });
    return (
        <div className="wrapper">
            <h1>Rating Stars</h1>
            <p></p>
            <RatingList ratings={ratings} />
        </div>
    );
};

export default App;
