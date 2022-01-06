import { createContext, useReducer } from "react";
import { passwordReducer, initialPasswordState } from "../reducer/passwordReducer";
import { usePassword } from "../hooks/usePassword";
import { PasswordContextType } from "../App.d";

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
