import * as React from "react";
import { createContext, useState } from "react";
import { TokenContextType } from "../App.d";

export const TokenContext = createContext<TokenContextType>({
    token: false,
    setToken: () => {},
});

export const TokenProvider = ({ children }: { children: any }) => {
    const [token, setToken] = useState(false);

    return <TokenContext.Provider value={{ token, setToken }}>{children}</TokenContext.Provider>;
};

// export const useCredentialsContext = () => {
//     const { credentials } = useCredentialsFromApi();
//     const [token, setToken] = useState(false);
//     const TokenContext = createContext([token, setToken]);

//     //akcja:
//     return credentials;
// };
