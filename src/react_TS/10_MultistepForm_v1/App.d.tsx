export type initialItemType = {
    value: string;
    error: boolean;
    errorMessage: string;
};

export type initialStateType = {
    [key: string]: initialItemType;
};

//NOTE taki typ, ok?
export type validationType = {
    [key: string]: (name: string, value: string) => { isError: boolean; errorMessage: string };
};
