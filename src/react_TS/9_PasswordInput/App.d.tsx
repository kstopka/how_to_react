import React from "react";

export interface Values {
    [key: string]: string;
}
export interface PasswordState {
    indexes: number[];
    values: Values;
    onSuccess: boolean;
}

export type PasswordContextType = {
    passwordState: PasswordState;
    dispatchPasswordState: React.Dispatch<PasswordActions>;
};

export enum ActionType {
    setInitialPassword,
    setValue,
    setOnSuccess,
}

export interface setInitialPassword {
    type: ActionType.setInitialPassword;
    payload: { value: string; index: number };
}
export interface setValue {
    type: ActionType.setValue;
    payload: { value: string; index: number };
}
export interface setOnSuccess {
    type: ActionType.setOnSuccess;
    payload: { onSuccess: boolean };
}

export type PasswordActions = setInitialPassword | setValue | setOnSuccess;
