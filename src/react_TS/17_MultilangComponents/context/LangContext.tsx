// to są dostępne języki

import { createContext } from "react";
import { initialState } from "../reducer/LangReducer";

const langs = {
    // pl,
    // en,
};
// to jest kontekst do wielojęzyczności aplikacji
// dane językowe oraz metody do zmiany muszą zostać załadowane do kontekstu

// to jest LangChanger
// const LangChanger = ({ langs = langs }) => {
// return ...
// };

const ContextInitialLang = {
    texts: initialState,
};

export const LangContext = createContext(ContextInitialLang);

export const ProviderLang = ({ children }: { children: any }) => {
    // const [state,dispatch]
    // return <LangContext.Provider
};
