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

export interface InitialCredentials {
    login: {
        value: string;
        error: boolean;
        errorMessage: string;
    };
    password: {
        value: string;
        error: boolean;
        errorMessage: string;
    };
}

export type TokenContextType = {
    token: boolean;
    setToken: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ActionDispatch = {
    type: string;
    value: string;
    name: string;
};

export type validationType = {
    [key: string]: (name: string, value: string) => { isError: boolean; errorMessage: string };
};

export type HandleChangeValueType = (e: {
    target: {
        name: string;
        value: string;
    };
}) => void;
