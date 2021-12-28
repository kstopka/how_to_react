import * as React from "react";
import { useMemo } from "react";
import AverageScore from "./AverageScore";
import Rating from "./Rating";
import { RatingType } from "../App.d";

const RatingList = ({ ratings }: { ratings: RatingType[] }) => {
    const memoRatings = useMemo(() => {
        return ratings;
    }, [ratings]);
    let mapRatingList = memoRatings.map((rating) => <Rating rating={rating} key={rating.recordId} />);
    const numberOfElementsToDelete = mapRatingList.length - 10;
    mapRatingList.splice(9, numberOfElementsToDelete);
    return (
        <div>
            <AverageScore ratings={ratings} />
            <ul>{mapRatingList}</ul>
        </div>
    );
};

export default RatingList;
