import { useContext, useEffect, useReducer } from "react";
import { ContextCart } from "../context/contextCart";
import { ActionType } from "../App.d";

export const useCartReducer = () => {
    const { stateCart, dispatchCart } = useContext(ContextCart);

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
