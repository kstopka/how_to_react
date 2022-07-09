import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./LangReducer";
import { pl, en } from "./LangData";
import { Action, ContextType, IActions } from "./App.d";

const languages = {
  pl,
  en,
};

const ContextInitial: ContextType = {
  state: initialState,
  actions: {
    setLang: (codeLang, name) => {},
  },
};

export const Context = createContext(ContextInitial);

export const Provider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions: IActions = {
    setLang: (codeLang, name) => {
      dispatch({
        type: Action.setLang,
        payload: {
          name,
          value: languages[codeLang][name],
        },
      });
    },
  };

  useEffect(() => {
    actions.setLang("pl", "attention");
    actions.setLang("pl", "newsletter");
  }, []);

  return (
    <Context.Provider value={{ state, actions }}>{children}</Context.Provider>
  );
};
