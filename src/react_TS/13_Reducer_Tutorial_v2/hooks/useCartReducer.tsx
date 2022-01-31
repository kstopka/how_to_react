import { useContext, useEffect, useReducer } from "react";
import { ContextProduct } from "../context/contextProduct";
import { ActionType } from "../App.d";

export const useCartReducer = () => {
    const { stateProduct: stateCart, dispatchProduct: dispatchCart } = useContext(ContextProduct);

    const addition = (index: number) => {
        dispatchCart({ type: ActionType.AdditionProduct, index });
    };

    const subtraction = (index: number) => {
        dispatchCart({ type: ActionType.SubtractionProduct, index });
    };
    const subtractionAllProduct = (index: number) => {
        dispatchCart({ type: ActionType.SubtractionAllProduct, index });
    };

    return { stateCart, addition, subtraction, subtractionAllProduct };
};
