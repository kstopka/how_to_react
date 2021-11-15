import * as React from "react";
import ShowStars from "./ShowStars";
import { RatingType } from "../App";

const AverageScore = ({ ratings }: { ratings: RatingType[] }) => {
    const arrayOfScore = ratings.map(({ score }: { score: number }) => score);
    const sumOfScore = arrayOfScore.reduce((a: number, b: number) => a + b);
    const calcAverageScore: number = sumOfScore / arrayOfScore.length;

    return (
        <div>
            <ShowStars number={calcAverageScore} />
        </div>
    );
};

export default AverageScore;
