import { useContext } from "react";
import { ContextCart } from "../context/contextCart";
import { ICartProducts } from "../App.d";

export const useCartList = (cartProduct: ICartProducts) => {
    const { cart } = useContext(ContextCart);
    const { quantity } = cartProduct;

    const checkDisabled = (quantity: number) => {
        if (quantity === 0) {
            return true;
        }
        return false;
    };
    const isDisabledButtonAdd = checkDisabled(quantity);

    const returnCartProduct = () => {
        return cart.cartProductList.find((item) => item.product.id === cartProduct.product.id);
    };
    const addedProductToCart = returnCartProduct();
    return { isDisabledButtonAdd, addedProductToCart };
};
