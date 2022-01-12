import { createContext, useReducer } from "react";

import { refReducer, initialRefState } from "../reducer/reducer";
import { RefContextType } from "../App.d";

const RefContextInitial: RefContextType = {
    refState: initialRefState,
    refDispatch: () => null,
};

export const RefContext = createContext(RefContextInitial);

export const RefProvider = ({ children }: { children: any }) => {
    const [refState, refDispatch] = useReducer(refReducer, initialRefState);
    return <RefContext.Provider value={{ refState, refDispatch }}>{children}</RefContext.Provider>;
};
