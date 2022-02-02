import { useContext } from "react";
import { ActionTypeCart, ActionTypeProduct, ICartProduct } from "../App.d";
import { ContextCart } from "../context/contextCart";
import { ContextProduct } from "../context/contextProduct";

export const useCartReducer = () => {
    const { stateCart, dispatchCart } = useContext(ContextCart);
    const { dispatchProduct } = useContext(ContextProduct);

    const additionProduct = (cartProduct: ICartProduct) => {
        const { id } = cartProduct.product;
        dispatchCart({ type: ActionTypeCart.AdditionToCart, cartProduct });
        dispatchCart({ type: ActionTypeCart.ChangeQuantity, id, mode: "start" });
    };

    const removeProduct = (id: string) => {
        dispatchCart({ type: ActionTypeCart.RemoveFromCart, id });
    };
    const subtractionAllProduct = () => {
        dispatchCart({ type: ActionTypeCart.ClearCart });
    };
    const submittCart = () => {
        // moze reduce ?
        stateCart.cartProductList.forEach((element) => {
            const { quantity, product } = element;
            const { id } = product;
            dispatchProduct({ type: ActionTypeProduct.ChangeProductQuantity, quantity, id });
        });
        dispatchCart({ type: ActionTypeCart.ClearCart });
    };

    const changeDiscountCode = () => {
        dispatchCart({ type: ActionTypeCart.ChangeDiscountCode });
    };

    const changeCartValue = () => {
        dispatchCart({ type: ActionTypeCart.ChangeCartValue });
    };

    return {
        stateCart,
        additionProduct,
        removeProduct,
        subtractionAllProduct,
        changeDiscountCode,
        submittCart,
        changeCartValue,
    };
};
