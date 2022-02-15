import { createContext, useReducer } from "react";
import { initialStateParallax, reducerParallax } from "../reducer/reducerParallax";
import { IContextInitialParallax } from "../App.d";

const contextInitialParallax: IContextInitialParallax = {
    state: initialStateParallax,
    dispatch: () => null,
};

export const ContextParallax = createContext(contextInitialParallax);

export const ProviderParallax = ({ children }: { children: any }) => {
    const [state, dispatch] = useReducer(reducerParallax, initialStateParallax);

    return <ContextParallax.Provider value={{ state, dispatch }}>{children}</ContextParallax.Provider>;
};
