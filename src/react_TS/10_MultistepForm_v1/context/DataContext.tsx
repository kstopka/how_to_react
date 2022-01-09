import React, { createContext, useReducer } from "react";
import { dataReducer, visibleStepreducer } from "../reducer/MultistepFormReducer";
import { InitialStateType, MainActions, DataContextType } from "../App.d";

const initialState: InitialStateType = {
    data: {
        name: {
            value: "",
            error: false,
            errorMessage: "",
        },
        surname: {
            value: "",
            error: false,
            errorMessage: "",
        },
        email: {
            value: "",
            error: false,
            errorMessage: "",
        },
        phonenumber: {
            value: "",
            error: false,
            errorMessage: "",
        },
    },
    visibleStep: 0,
};

const DataContextInitial: DataContextType = {
    state: initialState,
    dispatch: () => null,
};

export const DataContext = createContext(DataContextInitial);

const mainReducer = ({ data, visibleStep }: InitialStateType, action: MainActions) => ({
    data: dataReducer(data, action),
    visibleStep: visibleStepreducer(visibleStep, action),
});

export const DataProvider = ({ children }: { children: any }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);
    return <DataContext.Provider value={{ state, dispatch }}>{children}</DataContext.Provider>;
};
