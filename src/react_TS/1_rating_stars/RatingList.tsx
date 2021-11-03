import * as React from "react";
import AverageScore from "./AverageScore";
import Rating from "./Rating";
// import RatingType from "./RatingStars";

const RatingList = (props: { ratings: any[] }) => {
    const mapRatingList = props.ratings.map((rating: any) => (
        <Rating name={rating.name} key={rating.recordId} score={rating.score} content={rating.content} />
    ));
    mapRatingList.length = 10;
    return (
        <div>
            <AverageScore ratings={props.ratings} />
            <ul>{mapRatingList}</ul>
        </div>
    );
};

export default RatingList;
