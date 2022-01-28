import * as React from "react";
import { FunctionComponent, useEffect } from "react";
import CartProduct from "./CartProduct";
import { useCartReducer } from "../hooks/useCartReducer";
import dataCart from "../data/data.json";

interface CartProps {}

const Cart: FunctionComponent<CartProps> = () => {
    const { stateCart, additionProduct } = useCartReducer(dataCart.cart.cartProductList);
    const { cartProductList } = stateCart;

    const cartProducts = cartProductList.map((cartProduct, index) => (
        <CartProduct key={index} cartProduct={cartProduct} />
    ));

    return (
        <ul className="cart">
            <button onClick={additionProduct}>kliktest</button>
            {cartProducts}
        </ul>
    );
};

export default Cart;
