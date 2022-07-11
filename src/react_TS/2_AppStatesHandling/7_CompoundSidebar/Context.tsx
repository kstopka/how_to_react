import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./Reducer";
import { Action, ContextType, IActions } from "./App.d";

import { store } from "./Data";

const ContextInitial: ContextType = {
  state: initialState,
  actions: {
    setData: () => {},
  },
};

export const Context = createContext(ContextInitial);

export const Provider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions: IActions = {
    setData: (values) => {
      dispatch({
        type: Action.setData,
        payload: values,
      });
    },
  };

  useEffect(() => {
    actions.setData(store);
  }, []);

  return (
    <Context.Provider value={{ state, actions }}>{children}</Context.Provider>
  );
};
