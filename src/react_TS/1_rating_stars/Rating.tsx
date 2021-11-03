import * as React from "react";
import ShowStars from "./ShowStars";

const Rating = (props: any) => {
    const { content, name } = props;
    //NOTE: content ma mieć 120 znakow

    return (
        <li>
            <h1>{name}</h1>
            {<ShowStars number={props.score} />}
            <p>{content}</p>
        </li>
    );
};

export default Rating;
