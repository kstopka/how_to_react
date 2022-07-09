import { useEffect, useReducer } from "react";
import mockedData from "../data/fakeAPI";
import { credentialsReducer, initialState } from "../reducer/reducerTakedCredentials";
import { CredentialsType } from "../App.d";

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
