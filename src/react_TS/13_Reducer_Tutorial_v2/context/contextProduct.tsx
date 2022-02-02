import { createContext, useReducer } from "react";
import { initialStateProduct, reducerProduct } from "../reducer/reducerProduct";
import { IContextInitialProduct } from "../App.d";

const ContextInitialProduct: IContextInitialProduct = {
    stateProduct: initialStateProduct,
    dispatchProduct: () => null,
};

export const ContextProduct = createContext(ContextInitialProduct);

export const ProviderProduct = ({ children }: { children: any }) => {
    const [stateProduct, dispatchProduct] = useReducer(reducerProduct, initialStateProduct);

    return <ContextProduct.Provider value={{ stateProduct, dispatchProduct }}>{children}</ContextProduct.Provider>;
};
