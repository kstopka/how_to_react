import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserCredentials } from "../App.d";
import mockedData from "../data/fakeAPI";
import { RootState } from "../store";
import { setError, setUsersCredentials } from "../reducer/reducerData";

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
        setForError();
    }
};

export const useCredentialsFromApi = () => {
    const { imBusy, usersCredentials, errorMessage, error } = useSelector((state: RootState) => state.data);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!imBusy) {
            asyncWrapperForPromiseWithConnectedState(() => mockedData(false), {
                setForResponse: dispatch(setUsersCredentials),
                setForError: dispatch(setError("tekst")),
            });
        }
    });
    return { imBusy, usersCredentials, errorMessage, error };
};
