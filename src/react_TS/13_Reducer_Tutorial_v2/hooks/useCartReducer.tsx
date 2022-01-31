import { useContext, useEffect, useReducer } from "react";
import { ContextProduct } from "../context/contextProduct";
import { ActionTypeProduct } from "../App.d";

export const useCartReducer = () => {
    const { stateProduct, dispatchProduct } = useContext(ContextProduct);

    const addition = (index: number) => {
        dispatchProduct({ type: ActionTypeProduct.AdditionProduct, index });
    };

    const subtraction = (index: number) => {
        dispatchProduct({ type: ActionTypeProduct.SubtractionProduct, index });
    };
    const subtractionAllProduct = (index: number) => {
        dispatchProduct({ type: ActionTypeProduct.SubtractionAllProduct, index });
    };

    return { stateCart: stateProduct, addition, subtraction, subtractionAllProduct };
};
