import * as React from "react";
import { createContext, useState } from "react";
import { MenuContextType } from "../App.d";

export const MenuContext = createContext<MenuContextType>({
    token: false,
    setToken: () => {},
});

export const MenuProvider = ({ children }: { children: any }) => {
    const [token, setToken] = useState(false);

    return <MenuContext.Provider value={{ token, setToken }}>{children}</MenuContext.Provider>;
};

// export const useCredentialsContext = () => {
//     const { credentials } = useCredentialsFromApi();
//     const [token, setToken] = useState(false);
//     const TokenContext = createContext([token, setToken]);

//     //akcja:
//     return credentials;
// };
