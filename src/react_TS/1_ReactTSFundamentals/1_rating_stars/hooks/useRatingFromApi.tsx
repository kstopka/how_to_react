import { useEffect, useReducer } from "react";
import { RatingType, InitialStateType } from "../App.d";
import mockedData from "../components/fakeApi";

const asyncWrapperForPromiseWithConnectedState = async (
    promiseWrapper: { (): Promise<RatingType[]>; (): any },
    {
        setForError,
        setForResponse,
    }: {
        setForError: any;
        setForResponse: any;
    }
) => {
    try {
        const placeholderData = await promiseWrapper();
        setForResponse(placeholderData);
    } catch ({ message, duringError }) {
        setForError(message);
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

const ratingsRecuder = (state: any, action: { type: string; value: string | RatingType }) => {
    switch (action.type) {
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

const setError = (dispatch: (arg0: { type: string; value: any }) => any) => (payload: any) =>
    dispatch({
        type: "setError",
        value: payload,
    });
const setRatings = (dispatch: (arg0: { type: string; value: any }) => any) => (payload: any) =>
    dispatch({
        type: "setRatings",
        value: payload,
    });

export const useRatingFromApi = () => {
    const [state, dispatch] = useReducer(ratingsRecuder, initialState);
    const { imBusy, ratings, errorMessage, error } = state;

    useEffect(() => {
        if (!imBusy) {
            asyncWrapperForPromiseWithConnectedState(() => mockedData(true), {
                setForError: setError(dispatch),
                setForResponse: setRatings(dispatch),
            });
        }
    }, [imBusy]);
    return { imBusy, ratings, errorMessage, error };
};
