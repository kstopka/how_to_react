import { createContext, useContext, useReducer } from "react";
import { ActionTypeCart, ActionTypeProduct, ICartProduct, IContextInitialCart } from "../App.d";
import { initialStateCart, reducerCart } from "../reducer/reducerCart";
import { ContextProduct } from "./contextProduct";

const ContextInitialCart: IContextInitialCart = {
    cart: initialStateCart,
    dispatch: () => null,
};

export const ContextCart = createContext(ContextInitialCart);

const actions = {
    additionProduct:
        (dispatch: (arg0: { type: ActionTypeCart; cartProduct?: ICartProduct; id?: string; mode?: string }) => void) =>
        (cartProduct: ICartProduct) => {
            const { id } = cartProduct.product;
            dispatch({ type: ActionTypeCart.AdditionToCart, cartProduct });
            dispatch({ type: ActionTypeCart.ChangeQuantity, id, mode: "start" });
        },

    removeProduct: (dispatch: (arg0: { type: ActionTypeCart; id: string }) => void) => (id: string) => {
        dispatch({ type: ActionTypeCart.RemoveFromCart, id });
    },
    subtractionAllProduct: (dispatch: (arg0: { type: ActionTypeCart }) => void) => () => {
        dispatch({ type: ActionTypeCart.ClearCart });
    },
    submittCart:
        (dispatch: (arg0: { type: ActionTypeCart }) => void, cart: { cartProductList: ICartProduct[] }) => () => {
            // moze reduce ?
            cart.cartProductList.forEach((element) => {
                const { quantity, product } = element;
                const { id } = product;
                // dispatchProduct({ type: ActionTypeProduct.ChangeProductQuantity, quantity, id });
            });
            dispatch({ type: ActionTypeCart.ClearCart });
        },

    changeDiscountCode: (dispatch: (arg0: { type: ActionTypeCart }) => void) => () => {
        dispatch({ type: ActionTypeCart.ChangeDiscountCode });
    },

    changeCartValue: (dispatch: (arg0: { type: ActionTypeCart }) => void) => () => {
        dispatch({ type: ActionTypeCart.ChangeCartValue });
    },
};

export const ProviderCart = ({ children }: { children: any }) => {
    const [cart, dispatch] = useReducer(reducerCart, initialStateCart);
    const { dispatchProduct } = useContext(ContextProduct);

    // actions.changeCartValue(() => {});

    // const cleanCart = ()=> {
    //     dispatch({...})
    // }

    // useEffect(()=>{
    //     // ...
    // },[])

    // wyczyscic koszyk
    // dodac do koszyka
    // zmienic ilosc pozycji
    // usunac z koszyka
    // dodac rabat

    return <ContextCart.Provider value={{ cart, dispatch }}>{children}</ContextCart.Provider>;
};
