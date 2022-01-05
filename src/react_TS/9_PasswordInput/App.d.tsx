import React from "react";

export interface PasswordState {
    indexes: number[];
    values: {
        [key: string]: string;
    };
}

export type PasswordContextType = {
    passwordState: PasswordState;
    dispatchPasswordState: React.Dispatch<PasswordActionType>;
};

export interface PasswordActionType {
    type: string;
    name: string;
    value: string;
    index: number;
}
