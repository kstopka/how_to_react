import * as React from "react";
import { useState, useEffect, FunctionComponent } from "react";
import RatingList from "./RatingList";
import dataRatings from "./data.json";
import { RatingType, ObjRatingType } from "./App";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    //NOTE: jaką ustawić wartość początkową ??? \/
    //NOTE: jak ustawić typ state? ratings
    const [ratings, setRatings] = useState(dataRatings.ratings);

    useEffect(() => {
        const data: RatingType[] = dataRatings.ratings;
        setRatings(data);
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
