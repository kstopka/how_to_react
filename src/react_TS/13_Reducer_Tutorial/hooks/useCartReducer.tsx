import { useContext } from "react";
import { ActionTypeCart, ActionTypeProducts, ICartProducts } from "../App.d";
import { ContextCart } from "../context/contextCart";
import { ContextProducts } from "../context/contextProducts";

export const useCartReducer = () => {
    const { cart, dispatch, actions } = useContext(ContextCart);
    const { dispatch: dispatchProduct } = useContext(ContextProducts);

    const additionProduct = (cartProduct: ICartProducts) => actions.additionProduct(dispatch)(cartProduct);

    const removeProduct = (id: string) => actions.removeProduct(dispatch)(id);

    const subtractionAllProduct = () => {
        dispatch({ type: ActionTypeCart.ClearCart });
    };
    const submittCart = () => {
        cart.cartProductList.forEach((element) => {
            const { quantity, product } = element;
            const { id } = product;
            dispatchProduct({ type: ActionTypeProducts.ChangeProductQuantity, quantity, id });
        });
        actions.subtractionAllProduct(dispatch);
        // dispatch({ type: ActionTypeCart.ClearCart });
    };

    const changeDiscountCode = () => {
        dispatch({ type: ActionTypeCart.ChangeDiscountCode });
    };

    const changeCartValue = () => {
        dispatch({ type: ActionTypeCart.ChangeCartValue });
    };

    return {
        additionProduct,
        removeProduct,
        subtractionAllProduct,
        changeDiscountCode,
        submittCart,
        changeCartValue,
    };
};
