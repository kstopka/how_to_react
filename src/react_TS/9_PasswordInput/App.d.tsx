import React from "react";

export interface Values {
    [key: string]: string;
}
export interface IInitialStatePassowrd {
    indexes: number[];
    values: Values;
    onSuccess: boolean;
}

export type ContextPasswordType = {
    statePassword: IInitialStatePassowrd;
    dispatchPassword: React.Dispatch<ActionsCart>;
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
    payload: { isSuccess: boolean };
}

export type ActionsCart = setInitialPassword | setValue | setOnSuccess;
