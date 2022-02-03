import { useContext } from "react";
import { ActionTypeCart, ActionTypeProduct, ICartProduct } from "../App.d";
import { ContextCart } from "../context/contextCart";
import { ContextProduct } from "../context/contextProduct";

export const useCartReducer = () => {
    const { cart, dispatch } = useContext(ContextCart);
    const { dispatchProduct } = useContext(ContextProduct);

    const additionProduct = (cartProduct: ICartProduct) => {
        const { id } = cartProduct.product;
        dispatch({ type: ActionTypeCart.AdditionToCart, cartProduct });
        dispatch({ type: ActionTypeCart.ChangeQuantity, id, mode: "start" });
    };

    const removeProduct = (id: string) => {
        dispatch({ type: ActionTypeCart.RemoveFromCart, id });
    };
    const subtractionAllProduct = () => {
        dispatch({ type: ActionTypeCart.ClearCart });
    };
    const submittCart = () => {
        // moze reduce ?
        cart.cartProductList.forEach((element) => {
            const { quantity, product } = element;
            const { id } = product;
            dispatchProduct({ type: ActionTypeProduct.ChangeProductQuantity, quantity, id });
        });
        dispatch({ type: ActionTypeCart.ClearCart });
    };

    const changeDiscountCode = () => {
        dispatch({ type: ActionTypeCart.ChangeDiscountCode });
    };

    const changeCartValue = () => {
        dispatch({ type: ActionTypeCart.ChangeCartValue });
    };

    return {
        stateCart: cart,
        additionProduct,
        removeProduct,
        subtractionAllProduct,
        changeDiscountCode,
        submittCart,
        changeCartValue,
    };
};
