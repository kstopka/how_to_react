import { createContext, useReducer } from "react";

interface JSONlike {
  [key: string]: string;
}
export interface InitialState {
  counter: number;
  values: JSONlike;
}
export const initialState: InitialState = {
  counter: 0,
  values: {},
};
export enum Action {
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

export interface ContextType {
  state: InitialState;
  dispatch: React.Dispatch<Actions>;
}

const ContextInitial: ContextType = {
  state: initialState,
  dispatch: () => null,
};

const Context = createContext(ContextInitial);

const Provider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
