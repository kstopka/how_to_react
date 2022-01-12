import React, { createContext, useReducer } from "react";
import { dataReducer, visibleStepreducer } from "../reducer/MultistepFormReducer";
import { InitialStateType, MainActions, DataContextType, Types, HandleChangeValueType } from "../App.d";
import { validation } from "../Validator";
import useForm from "../hooks/useForm";

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
    handleChangeValue: () => null,
    onSubmit: () => null,
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
    // const { handleChangeValue, onSubmit } = useForm();

    // const dispatchedActions = dispatchAllActions(actions, dispatch)

    const handleChangeValue: HandleChangeValueType = (e) => {
        const { name, value } = e.target;
        const { isError, errorMessage } = validation[name](name, value);
        if (isError) {
            return dispatch({ type: Types.setError, payload: { name, value: errorMessage } });
        }
        dispatch({ type: Types.setValue, payload: { name, value } });
    };

    const onSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        alert(`send: ${state.data}`);
    };

    return (
        <DataContext.Provider value={{ state, dispatch, handleChangeValue, onSubmit }}>{children}</DataContext.Provider>
    );
};
