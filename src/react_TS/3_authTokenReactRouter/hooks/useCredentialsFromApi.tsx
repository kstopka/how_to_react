import * as React from "react";
import { useState, useEffect } from "react";
import { CredentialsType } from "../App.d";
import mockedData from "../data/fakeAPI";

export const useCredentialsFromApi = () => {
    const [users, setUsers] = useState<CredentialsType[]>([
        {
            login: "",
            password: "",
        },
    ]);

    const [errorMessage, setErrorMessage] = useState<string>("");
    const [error, seterror] = useState<boolean>();
    const Loading = () => (
        <div>
            <h1>please wait 2 seconds</h1>
        </div>
    );

    useEffect(() => {
        mockedData(true)
            .then((resolve) => setUsers(resolve))
            .catch((rejects) => {
                setErrorMessage(rejects.error.message);
                seterror(rejects.erorr.error);
            });
    }, []);

    return { users, errorMessage, error };
};
