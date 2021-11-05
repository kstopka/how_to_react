import * as React from "react";
import AverageScore from "./AverageScore";
import Rating from "./Rating";
// import RatingType from "./RatingStars";

// poprawic typowanie
const RatingList = ({ ratings }: { ratings: any[] }) => {
    // useMemo - poczytać
    const mapRatingList = ratings.map(({ name, score, content, recordId }: any) => (
        <Rating name={name} key={recordId} score={score} content={content} />
    ));
    mapRatingList.length = 10; // nie w ten sposób bo powoduje problemy z pamięcia
    return (
        <div>
            <AverageScore ratings={ratings} />
            <ul>{mapRatingList}</ul>
        </div>
    );
};

export default RatingList;
