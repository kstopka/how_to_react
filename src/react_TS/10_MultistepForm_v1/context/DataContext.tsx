import React, { createContext, useReducer } from "react";
import { dataReducer, visibleStepreducer } from "../reducer/MultistepFormReducer";
import { InitialStateType, MainActions, DataContextType, Types } from "../App.d";
import { validation } from "../Validator";

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

// const actions = {
//     handleChangeValue:(dispatch)=>(e: { target: { name: string; value: string } }) => {
//         const { name, value } = e.target;
//         const { isError, errorMessage } = validation[name](name, value);
//         if (isError) {
//             return dispatch({ type: Types.setError, payload: { name, value: errorMessage } });
//         }
//         dispatch({ type: Types.setValue, payload: { name, value } });
//     };
// }

export const DataProvider = ({ children }: { children: any }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    // const dispatchedActions = dispatchAllActions(actions, dispatch)

    const handleChangeValue = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        const { isError, errorMessage } = validation[name](name, value);
        if (isError) {
            return dispatch({ type: Types.setError, payload: { name, value: errorMessage } });
        }
        dispatch({ type: Types.setValue, payload: { name, value } });
    };

    return <DataContext.Provider value={{ state, dispatch }}>{children}</DataContext.Provider>;
};
