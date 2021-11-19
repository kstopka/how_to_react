import * as React from "react";
import { createContext, useContext } from "react";

import { useCredentialsFromApi } from "../App.hooks";

export const useCredentialsContext = () => {
    const { users } = useCredentialsFromApi();
    const CredentialsContext = createContext(users);
    const credentails = useContext(CredentialsContext);
    return credentails;
};
