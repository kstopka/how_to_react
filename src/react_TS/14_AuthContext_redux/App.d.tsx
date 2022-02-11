import { PayloadAction } from "@reduxjs/toolkit";

export interface Status {
    isLogged: boolean;
    login: Credentials;
    password: Credentials;
}
export interface Credentials {
    value: string;
    error: boolean;
    errorMessage: string;
}

export type CredentialsType = "login" | "password";

export type CredentialsAction = PayloadAction<{ name: CredentialsType; value: string }>;

export type validationType = {
    [key: string]: (name: string, value: string) => { isError: boolean; errorMessage: string };
};
