import ShowStars from "./ShowStars";
import { RatingType } from "../App.d";

const Rating = ({ rating }: { rating: RatingType }) => {
    const { content, name, score } = rating;
    const slicedContent = content.slice(0, 120);

    return (
        <li>
            <h1>{name}</h1>
            {<ShowStars number={score} />}
            <p>{slicedContent}</p>
        </li>
    );
};

export default Rating;
