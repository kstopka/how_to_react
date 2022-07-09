import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";

import mockedData from "../data/fakeAPI";
import { RootState } from "../store";
import { setError, setUsersCredentials } from "../reducer/reducerData";
import { changeIsLogged } from "../reducer/reducerStatus";

import { UserCredentials } from "../App.d";
import { checkCookiesToLogin } from "../Validator";

const asyncWrapperForPromiseWithConnectedState = async (
    promiseWrapper: { (): Promise<UserCredentials[]>; (): any },
    {
        setForError,
        setForResponse,
        setForIsLogged,
    }: {
        setForError: any;
        setForResponse: any;
        setForIsLogged: any;
    }
) => {
    try {
        const placeholderData = await promiseWrapper();
        setForResponse(placeholderData);
        if (checkCookiesToLogin(placeholderData)) {
            setForIsLogged();
        }
    } catch ({ message, duringError }) {
        setForError(message);
    }
};

const setForError = (dispatch: Dispatch<any>) => (payload: string) => {
    dispatch(setError(payload));
};
const setForResponse = (dispatch: Dispatch<any>) => (payload: UserCredentials[]) => {
    dispatch(setUsersCredentials(payload));
};
const setForIsLogged = (dispatch: Dispatch<any>) => () => {
    dispatch(changeIsLogged());
};

export const useCredentialsFromApi = () => {
    const { imBusy } = useSelector((state: RootState) => state.data);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!imBusy) {
            asyncWrapperForPromiseWithConnectedState(() => mockedData(true, 500), {
                setForError: setForError(dispatch),
                setForResponse: setForResponse(dispatch),
                setForIsLogged: setForIsLogged(dispatch),
            });
        }
    });
};
