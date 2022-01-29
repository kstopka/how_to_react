import { createContext, useReducer } from "react";
import { passwordReducer, initialStatePassword } from "../reducer/passwordReducer";
import { ContextPasswordType } from "../App.d";

const ContextInitialPassword: ContextPasswordType = {
    statePassword: initialStatePassword,
    dispatchPassword: () => null,
};

export const ContextPassword = createContext(ContextInitialPassword);

export const PasswordProvider = ({ children }: { children: any }) => {
    const [statePassword, dispatchPassword] = useReducer(passwordReducer, initialStatePassword);
    return <ContextPassword.Provider value={{ statePassword, dispatchPassword }}>{children}</ContextPassword.Provider>;
};
