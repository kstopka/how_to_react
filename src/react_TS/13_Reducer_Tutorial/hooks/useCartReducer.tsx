import { useEffect, useReducer } from "react";
import { ActionType } from "../App.d";
import { reducerCart, initialStateCart } from "../reducer/reducerCart";

export const useCartReducer = (cartProductList: any[]) => {
    const [stateCart, dispatchCart] = useReducer(reducerCart, initialStateCart);
    useEffect(() => {
        dispatchCart({ type: ActionType.ProductFromAPI, payload: { cartProductList: cartProductList } });
        // console.log(stateCart.cartProductList[0]);
    }, [cartProductList]);
    const additionProduct = () => {
        dispatchCart({ type: ActionType.AdditionProduct, payload: { index: 0 } });
    };

    return { stateCart, additionProduct };
};
