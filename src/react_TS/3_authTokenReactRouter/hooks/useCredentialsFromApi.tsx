import { useEffect, useReducer } from "react";
import { CredentialsType, InitialStateType } from "../App.d";
import mockedData from "../data/fakeAPI";
const asyncWrapperForPromiseWithConnectedState = async (
    promiseWrapper: { (): Promise<CredentialsType[]>; (): any },
    {
        setForBusy,
        setForError,
        setForResponse,
    }: {
        setForBusy: any;
        setForError: any;
        setForResponse: any;
    }
) => {
    try {
        setForBusy();
        const placeholderData = await promiseWrapper();
        setForResponse(placeholderData);
    } catch ({ message, duringError }) {
        setForError(message);
    }
};
const initialState: InitialStateType = {
    imBusy: false,
    Credentials: [],
    errorMessage: "",
    error: false,
};

const credentialsReducer = (state: any, action: { type: string; value?: any }) => {
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
        case "setData": {
            return {
                ...state,
                imBusy: true,
                credentials: action.value,
            };
        }
    }
};

const setBusy = (dispatch: { (value: { type: string; value?: any }): void; (arg0: { type: string }): any }) => () =>
    dispatch({
        type: "setBusy",
    });

const setError = (dispatch: (arg0: { type: string; value: any }) => any) => (payload: any) =>
    dispatch({
        type: "setError",
        value: payload,
    });
const setData = (dispatch: (arg0: { type: string; value: any }) => any) => (payload: any) =>
    dispatch({
        type: "setData",
        value: payload,
    });

export const useCredentialsFromApi = () => {
    const [state, dispatch] = useReducer(credentialsReducer, initialState);
    const { imBusy, credentials, errorMessage, error } = state;

    useEffect(() => {
        if (!imBusy) {
            asyncWrapperForPromiseWithConnectedState(() => mockedData(true), {
                setForBusy: setBusy(dispatch),
                setForError: setError(dispatch),
                setForResponse: setData(dispatch),
            });
        }
    });

    return { imBusy, credentials, errorMessage, error };
};
