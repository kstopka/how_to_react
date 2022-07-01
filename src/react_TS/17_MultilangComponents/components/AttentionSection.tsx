import * as React from "react";
import { useContext, FunctionComponent, createContext, useReducer, Dispatch } from "react";
// import { LangContext } from "../context/LangContext";

interface AttentionSectionProps {
    sectionName?: string;
}

export interface Values {
    [key: string]: string;
}
interface InitialState {
    counter: number;
    values: Values;
}
const initialState: InitialState = {
    counter: 0,
    values: {},
};
enum Action {
    reset,
    addition,
    subtraction,
    setValue,
    setValueObject,
}

interface Reset {
    type: Action.reset;
}
interface Addition {
    type: Action.addition;
}
interface Subtraction {
    type: Action.subtraction;
}
interface SetValue {
    type: Action.setValue;
    payload: { counter: number };
}
interface SetValueObject {
    type: Action.setValueObject;
    payload: { value: string; name: string };
}

type Actions = Reset | Addition | Subtraction | SetValue | SetValueObject;

const reducer = (state: InitialState, action: Actions) => {
    const { counter } = state;
    switch (action.type) {
        case Action.addition:
            return {
                ...state,
                counter: counter,
            };
        case Action.subtraction:
            return {
                ...state,
                counter: state.counter - 1,
            };
        case Action.reset:
            return {
                ...state,
                initialState,
            };
        case Action.setValue:
            // const { counter } = action.payload;
            return {
                ...state,
                counter,
            };
        case Action.setValueObject: {
            const { value, name } = action.payload;
            const { values } = state;

            return {
                ...state,
                values: {
                    ...values,
                    [name]: value,
                },
            };
        }

        default:
            return state;
    }
};

interface ContextType {
    state: InitialState;
    dispatch: React.Dispatch<Actions>;
}

const contextInitial: ContextType = {
    state: initialState,
    dispatch: () => null,
};

const Context = createContext(contextInitial);

const Provider = ({ children }: { children: any }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

const AttentionSection: FunctionComponent<AttentionSectionProps> = ({ sectionName = "attention" }) => {
    // const {
    //     state: { counter },
    //     dispatch,
    // } = useContext(context);

    // const { title, subtitle, ctaButton } = texts[sectionName];

    return (
        <div>
            {/* <button onClick={() => dispatch({ type: "addition" })}>+</button>
            <button onClick={() => dispatch({ type: "subtraction" })}>-</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button> */}
            {/* <h3>{counter}</h3> */}
            {/* <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <button>{ctaButton}</button> */}
        </div>
    );
};

export default AttentionSection;
