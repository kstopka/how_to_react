import React, { createContext, useReducer } from "react";
import { dataReducer, visibleStepreducer } from "../reducer/MultistepFormReducer";
import { InitialStateType, VisibleStepActions, DataActions } from "../App.d";

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

export const DataContext = createContext<{
    state: InitialStateType;
    dispatch: React.Dispatch<VisibleStepActions | DataActions>;
}>({
    state: initialState,
    dispatch: () => null,
});

const mainReducer = ({ data, visibleStep }: InitialStateType, action: VisibleStepActions | DataActions) => ({
    data: dataReducer(data, action),
    visibleStep: visibleStepreducer(visibleStep, action),
});

export const DataProvider = ({ children }: { children: any }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);
    return <DataContext.Provider value={{ state, dispatch }}>{children}</DataContext.Provider>;
};
