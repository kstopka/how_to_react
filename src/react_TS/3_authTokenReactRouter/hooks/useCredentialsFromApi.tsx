import { useEffect, useReducer, Dispatch } from "react";
import { CredentialsType, InitialStateType } from "../App.d";
import mockedData from "../data/fakeAPI";
const asyncWrapperForPromiseWithConnectedState = async (
    promiseWrapper: { (): Promise<CredentialsType[]>; (): any },
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
        const placeholderData = await promiseWrapper();
        setForResponse({ type: "setData", value: placeholderData });
    } catch ({ message, duringError }) {
        setForError({ type: "setError", value: message });
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

export const useCredentialsFromApi = () => {
    const [state, dispatch] = useReducer(credentialsReducer, initialState);
    const { imBusy, credentials, errorMessage, error } = state;

    useEffect(() => {
        if (!imBusy) {
            asyncWrapperForPromiseWithConnectedState(() => mockedData(true), {
                setForBusy: dispatch,
                setForError: dispatch,
                setForResponse: dispatch,
            });
        }
    });

    return { imBusy, credentials, errorMessage, error };
};
