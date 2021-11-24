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
