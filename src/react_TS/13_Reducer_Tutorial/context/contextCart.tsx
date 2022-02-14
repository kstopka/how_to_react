import { createContext, useContext, useReducer } from "react";
import { ActionTypeCart, ActionTypeProducts, IActions, ICartProducts, IContextInitialCart } from "../App.d";
import { initialStateCart, reducerCart } from "../reducer/reducerCart";
import { ContextProducts } from "./contextProducts";

const ContextInitialCart: IContextInitialCart = {
    cart: initialStateCart,
    dispatch: () => {},
    actions: {
        additionProduct: (dispatch) => (cartProduct) => {},
        removeProduct: (dispatch) => (id) => {},
        subtractionAllProduct: (dispatch) => () => {},
        // submittCart: (dispatch) => () => {},
        changeDiscountCode: (dispatch) => () => {},
        changeCartValue: (dispatch) => () => {},
        changeProductValue: (dispatch) => (id) => {},
    },
};

export const ContextCart = createContext(ContextInitialCart);

//NOTE co z tym dispatchem?
const actions: IActions = {
    additionProduct: (dispatch) => (cartProduct) => {
        const { id } = cartProduct.product;
        dispatch({ type: ActionTypeCart.AdditionToCart, cartProduct });
        dispatch({ type: ActionTypeCart.ChangeQuantity, id, mode: "start" });
    },

    removeProduct: (dispatch) => (id) => {
        dispatch({ type: ActionTypeCart.RemoveFromCart, id });
    },
    subtractionAllProduct: (dispatch) => () => {
        dispatch({ type: ActionTypeCart.ClearCart });
    },
    // submittCart: (dispatch) => () => {
    //     cart.cartProductList.forEach((element) => {
    //         const { quantity, product } = element;
    //         const { id } = product;
    //         // dispatchProduct({ type: ActionTypeProduct.ChangeProductQuantity, quantity, id });
    //     });
    //     dispatch({ type: ActionTypeCart.ClearCart });
    // },

    changeDiscountCode: (dispatch) => () => {
        dispatch({ type: ActionTypeCart.ChangeDiscountCode });
    },

    changeCartValue: (dispatch) => () => {
        dispatch({ type: ActionTypeCart.ChangeCartValue });
    },
    changeProductValue: (dispatch) => (id) => {
        dispatch({ type: ActionTypeCart.ChangeProductValue, id });
    },
};

export const ProviderCart = ({ children }: { children: any }) => {
    const [cart, dispatch] = useReducer(reducerCart, initialStateCart);
    const { dispatch: dispatchProduct } = useContext(ContextProducts);

    return <ContextCart.Provider value={{ cart, dispatch, actions }}>{children}</ContextCart.Provider>;
};
