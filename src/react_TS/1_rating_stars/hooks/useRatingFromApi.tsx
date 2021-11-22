import { useState, useEffect, Dispatch, SetStateAction, useReducer } from "react";
import { RatingType, ratingsReducerType } from "../App";
import mockedData from "../components/fakeApi";

// setForBusy(boolean)
// setForError({duringError, message})

// const promiseWrapperExample = () => new Promise(() => {});

// const asyncWrapperForPromiseWithConnectedState = async (
//     promiseWrapper: { (): Promise<RatingType[]>; (): any },
//     {
//         setForBusy,
//         setForError,
//         setForResponse,
//     }: {
//         setForBusy: Dispatch<SetStateAction<boolean>>;
//         setForError: Dispatch<SetStateAction<boolean>>;
//         setForResponse: Dispatch<SetStateAction<RatingType[]>>;
//     }
// ) => {
//     try {
//         setForBusy(true);
//         const placeholderData = await promiseWrapper(); // powinien być czasownik w akcji
//         setForResponse(placeholderData);
//         setForBusy(false);
//     } catch ({ message, duringError }) {
//         setForError(false);
//         setForBusy(false);
//     }
// };

const asyncWrapperForPromiseWithConnectedState = async (
    promiseWrapper: { (): Promise<RatingType[]>; (): any },
    {
        setForBusy,
        setForError,
        setForResponse,
    }: {
        setForBusy: Dispatch<SetStateAction<boolean>>;
        setForError: Dispatch<SetStateAction<boolean>>;
        setForResponse: Dispatch<SetStateAction<RatingType[]>>;
    }
) => {
    try {
        setForBusy(true);
        const placeholderData = await promiseWrapper(); // powinien być czasownik w akcji
        setForResponse(placeholderData);
    } catch ({ message, duringError }) {
        setForError(false);
    }
};

// React.Context
// useReducer / useContext
// reducer do array i obj

export const useRatingFromApi = () => {
    // const newReducer: ratingsReducerType = {
    //     imBusy: false,
    //     ratings: [
    //         {
    //             recordId: "",
    //             name: "",
    //             score: 0,
    //             content: "",
    //         },
    //     ],
    //     errorMessage: "",
    //     error: false,
    // };
    // const [ratingsReducer, setRatings] = useReducer(() => {
    //     const imBusy: boolean = false;
    //     const ratings: RatingType[] = [
    //         {
    //             recordId: "ads",
    //             name: "asvxcd",
    //             score: 2,
    //             content: "fdasf",
    //         },
    //     ];
    //     const errorMessage: string = "sdfsd";
    //     const error: boolean = false;
    //     return { imBusy, rating: ratings, errorMessage, error };
    // }, [newReducer]);
    const [imBusy, setBusy] = useState<boolean>(false);
    const [ratings, setRatings] = useState<RatingType[]>([
        {
            recordId: "",
            name: "",
            score: 0,
            content: "",
        },
    ]);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    //widok \/
    const Loading = () => (
        <div>
            <h1>please wait 2 seconds</h1>
        </div>
    );

    useEffect(() => {
        // 1 poziom ogólnosci
        //implementacja:
        // const asyncWrapper = async () => {
        //     try {
        //         setBusy(true);
        //         const placeholderData = await mockedData(true); // powinien być czasownik w akcji
        //         setRatings(placeholderData);
        //         setBusy(false);
        //     } catch ({ message, duringError }) {
        //         setErrorMessage("failed fetch"); //message
        //         setError(true); //duringError
        //         setBusy(false);
        //     }
        // };
        if (!imBusy) {
            asyncWrapperForPromiseWithConnectedState(() => mockedData(true), {
                setForBusy: setBusy,
                setForError: setError,
                setForResponse: setRatings,
            });
        }
        // wyższy poziom abstrakcji - prostsza
        // if (!imBusy) {
        //     asyncWrapper();
        // }
    });
    // const { imBusy, rating, errorMessage, error } = ratingsReducer;
    // return { {imBusy, rating, errorMessage, error} };
    return { imBusy, ratings, errorMessage, error };
};
