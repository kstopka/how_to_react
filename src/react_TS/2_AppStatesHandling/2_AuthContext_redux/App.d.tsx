import { PayloadAction } from "@reduxjs/toolkit";

export interface Status {
    isLogged: boolean;
    login: Credential;
    password: Credential;
}
export interface Credential {
    value: string;
    error: boolean;
    errorMessage: string;
}

export interface UserCredentials {
    login: string;
    password: string;
}

export interface DataUsersCredentials {
    imBusy: boolean;
    usersCredentials: UserCredentials[];
    error: boolean;
    errorMessage: string;
}

export type CredentialsType = "login" | "password";

export type CredentialsAction = PayloadAction<{ name: CredentialsType; value: string }>;

export type validationType = {
    [key: string]: (name: string, value: string) => { isError: boolean; errorMessage: string };
};
