import React from "react";

export type OptionsType = {
    threshold: number;
    root: null;
    rootMargin: string;
};

export type RefStateType = {
    refComponents: { current: Element | null }[];
};

export type RefContextType = {
    refState: RefStateType;
    refDispatch: React.Dispatch<Actions>;
};

export type Actions = {
    type: string;
    payload: { value: { current: Element | null } };
};
