import * as React from "react";
import { createContext, useContext } from "react";

import { useCredentialsFromApi } from "../App.hooks";

export const useCredentialsContext = () => {
    const { credentials } = useCredentialsFromApi();
    // const CredentialsContext = createContext(users);
    // const credentails = useContext(CredentialsContext);
    // //akcja:
    // return credentails;
};
