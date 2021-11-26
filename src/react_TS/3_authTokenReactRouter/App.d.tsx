import React from "react";

export type CredentialsType = {
    login: string;
    password: string;
};

export type InitialStateType = {
    imBusy: boolean;
    Credentials: CredentialsType[];
    error: boolean;
    errorMessage: string;
};

export type TokenContextType = {
    token: boolean;
    setToken: React.Dispatch<React.SetStateAction<boolean>>;
};
