import { createContext, useReducer } from "react";
import { initialStateProducts, reducerProducts } from "../reducer/reducerProducts";
import { IContextInitialProducts } from "../App.d";

const ContextInitialProducts: IContextInitialProducts = {
    state: initialStateProducts,
    dispatch: () => null,
};

export const ContextProducts = createContext(ContextInitialProducts);

export const ProviderProduct = ({ children }: { children: any }) => {
    const [state, dispatch] = useReducer(reducerProducts, initialStateProducts);

    return <ContextProducts.Provider value={{ state, dispatch }}>{children}</ContextProducts.Provider>;
};
