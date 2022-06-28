import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/LangReducer";
import { pl, en } from "../data/data";
import { LangChangerType, ContextType } from "../App.d";

const langs = {
    pl,
    en,
};
// to jest kontekst do wielojęzyczności aplikacji
// dane językowe oraz metody do zmiany muszą zostać załadowane do kontekstu

// to jest LangChanger
// const LangChanger: LangChangerType = (langs) => {
// const LangChanger = () => {
// return ...
// };

const ContextInitialLang: ContextType = {
    state: initialState,
    dispatch: () => null,
};

export const LangContext = createContext(ContextInitialLang);

export const ProviderLang = ({ children }: { children: any }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <LangContext.Provider value={{ state, dispatch }}>{children}</LangContext.Provider>;
};
