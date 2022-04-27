import { createContext } from "react";
import { initialState } from "../reducer/LangReducer";
import { pl, en } from "../data/data";
import { LangChangerType } from "../App.d";

const langs = {
    // pl,
    // en,
};
// to jest kontekst do wielojęzyczności aplikacji
// dane językowe oraz metody do zmiany muszą zostać załadowane do kontekstu

// to jest LangChanger
const LangChanger: LangChangerType = (langs) => {
    // const LangChanger = () => {
    // return ...
};

const ContextInitialLang = {
    texts: initialState,
};

export const LangContext = createContext(ContextInitialLang);

export const ProviderLang = ({ children }: { children: any }) => {
    // const [state,dispatch]
    // return <LangContext.Provider
};
