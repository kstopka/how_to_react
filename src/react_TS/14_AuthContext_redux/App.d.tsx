import { PayloadAction } from "@reduxjs/toolkit";

export interface Status {
    isLogged: boolean;
    login: string;
    password: string;
}
export type Credentials = "login" | "password";

export type CredentialsAction = PayloadAction<{ name: Credentials; value: string }>;
