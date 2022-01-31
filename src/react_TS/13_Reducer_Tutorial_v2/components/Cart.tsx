import * as React from "react";
import { FunctionComponent, useContext, useEffect } from "react";
import CartProduct from "./CartProduct";
import { useCartReducer } from "../hooks/useCartReducer";
import { ContextProduct } from "../context/contextProduct";
import dataCart from "../data/data.json";
import { ActionType, ICartProduct } from "../App.d";

interface CartProps {}

const Cart: FunctionComponent<CartProps> = () => {
    const { stateProduct: stateCart, dispatchProduct: dispatchCart } = useContext(ContextProduct);
    // const { stateCart, additionProduct } = useCartReducer(dataCart.cart.cartProductList);
    useEffect(() => {
        const data: ICartProduct[] = dataCart.cart.cartProductList;
        dispatchCart({ type: ActionType.ProductFromAPI, cartProductList: data });
    }, [dispatchCart]);
    const { cartProductList } = stateCart;

    const cartProducts = cartProductList.map((cartProduct, index) => (
        <CartProduct key={index} cartProduct={cartProduct} index={index} />
    ));

    return <ul className="cart">{cartProducts}</ul>;
};

export default Cart;
