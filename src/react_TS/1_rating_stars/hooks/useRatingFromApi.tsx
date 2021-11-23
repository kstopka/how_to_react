import { useEffect, useReducer, createContext, Dispatch } from "react";
import { RatingType, InitialStateType } from "../App.d";
import mockedData from "../components/fakeApi";

const asyncWrapperForPromiseWithConnectedState = async (
    promiseWrapper: { (): Promise<RatingType[]>; (): any },
    {
        setForBusy,
        setForError,
        setForResponse,
    }: {
        setForBusy: Dispatch<any>;
        setForError: Dispatch<any>;
        setForResponse: Dispatch<any>;
    }
) => {
    try {
        setForBusy({ type: "setBusy" });
        const placeholderData = await promiseWrapper(); // powinien być czasownik w akcji
        // setForResponse(placeholderData);
        setForResponse({ type: "setRatings" });
    } catch ({ message, duringError }) {
        setForError({ type: "setError" });
    }
};
const initialState: InitialStateType = {
    imBusy: false,
    ratings: [
        {
            recordId: "",
            name: "",
            score: 0,
            content: "",
        },
    ],
    errorMessage: "",
    error: false,
};

const ratingsRecuder = (state: any, action: { type: any }) => {
    switch (action.type) {
        case "setBusy": {
            return {
                ...state,
                imBusy: true,
            };
        }
        case "setError": {
            return {
                ...state,
                imBusy: false,
                errorMessage: "failed fetch",
                error: true,
            };
        }
        case "setRatings": {
            return {
                ...state,
                // imBusy: false,
                ratings: [
                    {
                        recordId: "s8j39fah9as",
                        name: "Pierwszy",
                        score: 3,
                        content: "oakdoasodkokokoko",
                    },
                    {
                        recordId: "jda839t9ajfa",
                        name: "Drugi",
                        score: 3,
                        content: "oakdoasodkokokoko",
                    },
                ],
            };
        }
    }
};

export const useRatingFromApi = () => {
    const [state, dispatch] = useReducer(ratingsRecuder, initialState);
    const { imBusy, ratings, errorMessage, error } = state;
    //widok \/
    // const Loading = () => (
    //     <div>
    //         <h1>please wait 2 seconds</h1>
    //     </div>
    // );

    useEffect(() => {
        if (!imBusy) {
            asyncWrapperForPromiseWithConnectedState(() => mockedData(true), {
                setForBusy: dispatch,
                setForError: dispatch,
                setForResponse: dispatch,
            });
        }
    });
    return { imBusy, ratings, errorMessage, error };
};
