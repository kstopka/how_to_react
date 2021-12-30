import { createContext, useState } from "react";
import { CheckLettersContextType } from "../App.d";

const initialState: CheckLettersContextType = {
    checkLetters: [false, ""],
    setCheckLetters: () => {},
};

export const CheckLettersContext = createContext(initialState);

export const CheckLettersProvaider = ({ children }: { children: any }) => {
    const [checkLetters, setCheckLetters] = useState([false, ""]);
    return (
        <CheckLettersContext.Provider value={{ checkLetters, setCheckLetters }}>
            {children}
        </CheckLettersContext.Provider>
    );
};
