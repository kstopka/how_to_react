import { createContext, useReducer } from "react";
import { IContextInitialCart } from "../App.d";
import { initialStateCart, reducerCart } from "../reducer/reducerCart";

const ContextInitialCart: IContextInitialCart = {
    stateCart: initialStateCart,
    dispatchCart: () => null,
};

export const ContextCart = createContext(ContextInitialCart);

export const ProviderCart = ({ children }: { children: any }) => {
    const [stateCart, dispatchCart] = useReducer(reducerCart, initialStateCart);
    return <ContextCart.Provider value={{ stateCart, dispatchCart }}>{children}</ContextCart.Provider>;
};
