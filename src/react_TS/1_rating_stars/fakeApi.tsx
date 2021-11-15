import { useState, useEffect } from "react";
import dataRatings from "./data.json";
import { RatingType } from "./App.d";

const mockedData = (success: boolean, timeout?: number): Promise<RatingType[]> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve(dataRatings.ratings);
            }
            reject({ error: true, message: "failed fetch" });
        }, timeout || 2000);
    });

export const useRatingFromApi = () => {
    const [ratings, setRatings] = useState<RatingType[]>(dataRatings.ratings);
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
