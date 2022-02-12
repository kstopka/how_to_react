import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";

import mockedData from "../data/fakeAPI";
import { RootState } from "../store";
import { setError, setUsersCredentials } from "../reducer/reducerData";
import { UserCredentials } from "../App.d";

const asyncWrapperForPromiseWithConnectedState = async (
    promiseWrapper: { (): Promise<UserCredentials[]>; (): any },
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
        console.log(placeholderData);
        setForResponse(placeholderData);
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

export const useCredentialsFromApi = () => {
    const { imBusy } = useSelector((state: RootState) => state.data);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!imBusy) {
            asyncWrapperForPromiseWithConnectedState(() => mockedData(true, 500), {
                setForError: setForError(dispatch),
                setForResponse: setForResponse(dispatch),
            });
        }
    });
};
