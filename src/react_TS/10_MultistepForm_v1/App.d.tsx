export type initialItemType = {
    value: string;
    error: boolean;
    errorMessage: string;
};

export type initialStateType = {
    [key: string]: initialItemType;
};
