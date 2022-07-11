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
    setLang: () => {},
  },
};

export const Context = createContext(ContextInitial);

export const Provider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions: IActions = {
    setLang: (codeLang) => {
      dispatch({
        type: Action.setLang,
        payload: languages[codeLang],
      });
    },
  };

  useEffect(() => {
    actions.setLang("pl");
  }, []);

  return (
    <Context.Provider value={{ state, actions }}>{children}</Context.Provider>
  );
};
