// useReducer: Gdy logika komponentu się rozrasta i chcemy oddzielić ją całkowicie od widoku.

// useReducer jako argument przyjmuje reducer i stan początkowy, a zwraca stan oraz funkcję dispatch
// const [count, dispatch] = useReducer(countReducer, 0);

import * as React from "react";
import { useReducer } from "react";

type State = {
    value: number;
};

const initialCounterState: State = {
    value: 0,
};

enum ActionKind {
    Increase = "INCREASE",
    Decrease = "DECREASE",
}

type Action = {
    type: ActionKind;
    payload: number;
};

const increaseAction: Action = {
    type: ActionKind.Increase,
    payload: 1,
};

const decreaseAction: Action = {
    type: ActionKind.Decrease,
    payload: 1,
};

function counterReducer(state: State, action: Action): State {
    const { type, payload } = action;

    switch (type) {
        case ActionKind.Increase:
            return {
                ...state,
                value: state.value + payload,
            };
        case ActionKind.Decrease:
            return {
                ...state,
                value: state.value - payload,
            };
        default:
            return state;
    }
}

const App: React.FC = () => {
    const [state, dispatch] = useReducer(counterReducer, initialCounterState);

    return (
        <div>
            Count: {state.value}
            <button onClick={() => dispatch(decreaseAction)}>-</button>
            <button onClick={() => dispatch(increaseAction)}>+</button>
        </div>
    );
};

export default App;
