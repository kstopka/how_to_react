import * as React from "react";
import { useEffect, FunctionComponent, useReducer, createContext } from "react";
import { initialState, reducer } from "./reducer/reducer";
import { ActionType, changeText, IActions, resetText, InitialState, IContextInitialCtx } from "./App.d";

interface ProviderProps {
    children: any;
    onLoad: any;
    onChange: any;
}

const ContextInitialCtx: IContextInitialCtx = {
    state: initialState,
    actions: {
        changeText: (payload) => {},
        resetText: () => {},
    },
};

export const Ctx = createContext(ContextInitialCtx);

export const Provider: FunctionComponent<ProviderProps> = ({ children, onLoad, onChange }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // tutaj łączymy context i actions i wrzucamy je do providera
    const actions: IActions = {
        changeText: (payload) => {
            dispatch({ type: ActionType.changeText, payload });
        },
        resetText: () => {
            dispatch({ type: ActionType.resetText });
        },
    };
    // prop onLoad powinien wywołać się na wczytaniu komponentu
    useEffect(() => {
        onLoad();
    }, [onLoad]);
    // prop onChange powinien wywołać się na zmianie stanu
    useEffect(() => {
        onChange();
    }, [onChange, state]);
    return (
        <div onLoad={onLoad} onChange={onChange}>
            <Ctx.Provider value={{ state, actions }}>{children}</Ctx.Provider>
        </div>
    );
};

export default Provider;
