import { useState, useEffect } from "react";
import { RatingType } from "../App";
import mockedData from "../components/fakeApi";

export const useRatingFromApi = () => {
    const [ratings, setRatings] = useState<RatingType[]>([
        {
            recordId: "",
            name: "",
            score: 0,
            content: "",
        },
    ]);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [error, seterror] = useState<boolean>();
    const Loading = () => (
        <div>
            <h1>please wait 2 seconds</h1>
        </div>
    );

    useEffect(() => {
        //NOTE: loader => gdzie powinno się go wywołać i jak przekazać, typy?
        //NOTE: i potem jest nadpisanie stanu (70%success/30%error)
        mockedData(true)
            // .then((resolve) => response.json())
            .then((resolve) => setRatings(resolve))
            .catch((rejects) => {
                setErrorMessage(rejects.error.message);
                seterror(rejects.erorr.error);
            });
    });

    return { ratings, errorMessage, error };
};
