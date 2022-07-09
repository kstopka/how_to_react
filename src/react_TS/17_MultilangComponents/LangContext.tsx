import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./LangReducer";
import { pl, en } from "./LangData";
import { Action, ContextType, IActions } from "./App.d";

const langs = {
  pl,
  en,
};
// // to jest kontekst do wielojęzyczności aplikacji
// // dane językowe oraz metody do zmiany muszą zostać załadowane do kontekstu

// // to jest LangChanger
// // const LangChanger: LangChangerType = (langs) => {
// // const LangChanger = () => {
// // return ...
// // };

const ContextInitial: ContextType = {
  state: initialState,
  dispatch: () => null,
};

export const Context = createContext(ContextInitial);

export const Provider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const action: IActions = {
    setPolish: (payload) => {
      dispatch({
        type: Action.setPolish,
        payload: {
          name: payload,
          value: pl[payload],
        },
      });
    },
  };

  useEffect(() => {
    action.setPolish("attention");
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
