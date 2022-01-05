import { createContext, useReducer } from "react";
import { PasswordContextType } from "../App.d";
import { passwordReducer, initialPasswordState } from "../reducer/PasswordReducer";

const PasswordContextInitial: PasswordContextType = {
    passwordState: initialPasswordState,
    dispatchPasswordState: () => {},
};

export const PasswordContext = createContext(PasswordContextInitial);

export const PasswordProvider = ({ children }: { children: any }) => {
    const [passwordState, dispatchPasswordState] = useReducer(passwordReducer, initialPasswordState);
    return (
        <PasswordContext.Provider value={{ passwordState, dispatchPasswordState }}>{children}</PasswordContext.Provider>
    );
};
