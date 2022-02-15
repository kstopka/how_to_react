import { useContext } from "react";
import { ActionTypeProducts, ICartProducts } from "../App.d";
import { ContextCart } from "../context/contextCart";
import { ContextProducts } from "../context/contextProducts";

export const useCartReducer = () => {
    const { cart, actions } = useContext(ContextCart);
    const { dispatch } = useContext(ContextProducts);
    //usecallbac
    const additionProduct = useCallback((cartProduct: ICartProducts) => actions.additionToCart(cartProduct), []);

    const removeProduct = (id: string) => actions.removeProduct(id);

    const subtractionAllProduct = () => actions.subtractionAllProduct();

    const submitCart = useCallback(() => {
        cart.cartProductList.forEach((element) => {
            const { quantity, product } = element;
            const { id } = product;
            dispatch({ type: ActionTypeProducts.ChangeProductQuantity, quantity, id });
        });
        actions.subtractionAllProduct();
    }, [cart.cartProductList]);

    const changeDiscountCode = () => actions.changeDiscountCode();

    const changeCartValue = () => actions.changeCartValue();

    return {
        additionProduct,
        removeProduct,
        subtractionAllProduct,
        changeDiscountCode,
        submittCart,
        changeCartValue,
    };
};
