import { createContext, useReducer } from "react";
import { DataContextType, initialStateType } from "../App.d";
import { initialState, reducer } from "../reducer/MultistepFormReducer";

const dataInitialState: DataContextType = {
    initialState,
    reducer,
};

export const DataInitialStateContext = createContext(dataInitialState);
//TODO dokończyć context
export const DataInitialStateProvider = ({ children }: { children: any }) => {
    const [data, dispatchData] = useReducer(reducer, initialState);

    return (
        <DataInitialStateContext.Provider value={{ data, dispatchData }}>{children}</DataInitialStateContext.Provider>
    );
};
