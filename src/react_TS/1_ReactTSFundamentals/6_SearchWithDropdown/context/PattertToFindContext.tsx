import { createContext, useState } from "react";
import { PattertToFindContextType } from "../App.d";

const initialState: PattertToFindContextType = {
    pattertToFind: new RegExp(""),
    setPattertToFind: () => {},
};

export const PattertToFindContext = createContext(initialState);

export const PattertToFindProvaider = ({ children }: { children: any }) => {
    const [pattertToFind, setPattertToFind] = useState(new RegExp(""));
    return (
        <PattertToFindContext.Provider value={{ pattertToFind, setPattertToFind }}>
            {children}
        </PattertToFindContext.Provider>
    );
};
