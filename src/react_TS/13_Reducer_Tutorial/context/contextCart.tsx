import { createContext, useReducer } from "react";
import { initialStateCart, reducerCart } from "../reducer/reducerCart";
import { ActionTypeCart, IActions, IContextInitialCart } from "../App.d";

const ContextInitialCart: IContextInitialCart = {
    cart: initialStateCart,
    actions: {
        additionToCart: (cartProduct) => {},
        removeProduct: () => {},
        subtractionAllProduct: () => {},
        changeDiscountCode: () => {},
        changeCartValue: () => {},
        changeProductValue: (id) => {},
        additionProduct: (id) => {},
        subtractionProduct: (id) => {},
    },
};

export const ContextCart = createContext(ContextInitialCart);

export const ProviderCart = ({ children }: { children: any }) => {
    const [cart, dispatch] = useReducer(reducerCart, initialStateCart);

    const actions: IActions = {
        additionToCart: (cartProduct) => {
            const { id } = cartProduct.product;
            dispatch({ type: ActionTypeCart.AdditionToCart, cartProduct });
            dispatch({ type: ActionTypeCart.ChangeQuantity, id, mode: "start" });
        },
        removeProduct: (id) => {
            dispatch({ type: ActionTypeCart.RemoveFromCart, id });
        },
        subtractionAllProduct: () => {
            dispatch({ type: ActionTypeCart.ClearCart });
        },
        changeDiscountCode: () => {
            dispatch({ type: ActionTypeCart.ChangeDiscountCode });
        },
        changeCartValue: () => {
            dispatch({ type: ActionTypeCart.ChangeCartValue });
        },
        changeProductValue: (id) => {
            dispatch({ type: ActionTypeCart.ChangeProductValue, id });
        },
        additionProduct: (id) => {
            dispatch({ type: ActionTypeCart.ChangeQuantity, id, mode: "addition" });
        },
        subtractionProduct: (id) => {
            dispatch({ type: ActionTypeCart.ChangeQuantity, id, mode: "subtraction" });
        },
    };
    return <ContextCart.Provider value={{ cart, actions }}>{children}</ContextCart.Provider>;
};
