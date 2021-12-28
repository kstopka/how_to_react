import * as React from "react";
import { FunctionComponent, createContext } from "react";

import RatingList from "./RatingList";
import { useRatingFromApi } from "../App.hooks";
import { RatingType } from "../App.d";
import Loading from "./Loading";

interface RatingStarsProps {}

const RatingStars: FunctionComponent<RatingStarsProps> = () => {
    const { imBusy, ratings, errorMessage, error } = useRatingFromApi();
    if (!imBusy) {
        return <Loading />;
    }

    return (
        <div className="wrapper">
            <h1>Rating Stars</h1>
            {error ? errorMessage : <RatingList ratings={ratings} />}
        </div>
    );
};

export default RatingStars;
