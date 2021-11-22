import AverageScore from "./AverageScore";
import Rating from "./Rating";
import { RatingType } from "../App";

const RatingList = ({ ratings }: { ratings: RatingType[] }) => {
    // useMemo - poczytać
    let mapRatingList = ratings.map(({ name, score, content, recordId }) => (
        <Rating name={name} key={recordId} score={score} content={content} recordId={recordId} />
    ));
    console.log(mapRatingList.length);
    const numberOfElementsToDelete = mapRatingList.length - 10;
    mapRatingList.splice(9, numberOfElementsToDelete);
    // mapRatingList = mapRatingList.slice(0, 10);
    console.log(mapRatingList.length);
    return (
        <div>
            <AverageScore ratings={ratings} />
            <ul>{mapRatingList}</ul>
        </div>
    );
};

export default RatingList;
