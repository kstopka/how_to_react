import React from "react";

export interface NewDataState {
    visibleStep: number;
    dataState: DataState;
}
export interface DataState {
    [key: string]: DataItem;
}

export interface DataItem {
    value: string;
    error: boolean;
    errorMessage: string;
}

export type DataContextType = {
    data: NewDataState;
    dispatchData: React.Dispatch<DataActionType>;
    //React.ReducerWithoutAction<any>
};

export interface DataActionType {
    type: string;
    name: string;
    value: string;
}

//NOTE taki typ, ok?
export type validationType = {
    [key: string]: (name: string, value: string) => { isError: boolean; errorMessage: string };
};
