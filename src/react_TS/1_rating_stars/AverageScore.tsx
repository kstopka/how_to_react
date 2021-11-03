import * as React from "react";
import ShowStars from "./ShowStars";

const AverageScore = (props: any) => {
    const arrayOfScore = props.ratings.map((item: { score: any }) => item.score);
    const sumOfScore = arrayOfScore.reduce((a: number, b: number) => a + b);
    const calcAverageScore: number = sumOfScore / arrayOfScore.length;

    return (
        <div>
            <ShowStars number={calcAverageScore} />
        </div>
    );
};

export default AverageScore;
