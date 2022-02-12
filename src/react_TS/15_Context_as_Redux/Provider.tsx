import * as React from "react";
import { useContext, useEffect, FunctionComponent, useReducer, createContext } from "react";
import { initialState, reducer } from "./reducer/reducer";
import { changeText, State } from "./App.d";

interface ProviderProps {
    children: any;
    onLoad: any;
    onChange: any;
}

export const Ctx = createContext({
    state: initialState,
    actions: {
        changeText: (state: State, action: changeText) => {},
    },
});

export const actions = {
    changeText: (state: State, action: changeText) => {
        return (state.text = action.payload);
    },
};

const Provider: FunctionComponent<ProviderProps> = ({ children, onLoad, onChange }) => {
    // const { state } = useContext(ctx);
    const [state, dispatch] = useReducer(reducer, initialState);
    // tutaj łączymy context i actions i wrzucamy je do providera
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
