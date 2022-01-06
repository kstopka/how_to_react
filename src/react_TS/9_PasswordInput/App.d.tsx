import React from "react";

export interface Values {
    [key: string]: string;
}
export interface PasswordState {
    indexes: number[];
    values: Values;
}

export type PasswordContextType = {
    passwordState: PasswordState;
    dispatchPasswordState: React.Dispatch<PasswordActionType>;
};

export interface PasswordActionType {
    type: string;
    value: string;
    index: number;
}
