import { useEffect, useReducer, Dispatch } from "react";
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
        setForBusy();
        const placeholderData = await promiseWrapper(); // powinien być czasownik w akcji
        setForResponse({ type: "setRatings", value: placeholderData });
    } catch ({ message, duringError }) {
        setForError({ type: "setError", value: message });
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

const ratingsRecuder = (state: any, action: { type: string; value?: any }) => {
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
                imBusy: true,
                errorMessage: action.value,
                error: true,
            };
        }
        case "setRatings": {
            return {
                ...state,
                imBusy: true,
                ratings: action.value,
            };
        }
    }
};

const setBusy = (dispatch) => (payload) =>
    dispatch({
        type: "setBusy",
        payload,
    });

export const useRatingFromApi = () => {
    const [state, dispatch] = useReducer(ratingsRecuder, initialState);
    const { imBusy, ratings, errorMessage, error } = state;

    useEffect(() => {
        if (!imBusy) {
            asyncWrapperForPromiseWithConnectedState(() => mockedData(true), {
                setForBusy: setBusy(dispatch),
                setForError: dispatch,
                setForResponse: dispatch,
            });
        }
    });
    return { imBusy, ratings, errorMessage, error };
};
