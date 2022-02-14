import * as React from "react";
import { FunctionComponent, useContext, useEffect } from "react";
import dataCart from "../data/data.json";
import { ContextProducts } from "../context/contextProducts";
import { ActionTypeProducts, ICartProducts } from "../App.d";
import { useCartReducer } from "../hooks/useCartReducer";
import { ContextCart } from "../context/contextCart";
import CartList from "./CartList";

interface CartProps {}

//products data

const Cart: FunctionComponent<CartProps> = () => {
    const { state, dispatch } = useContext(ContextProducts);
    const { cart } = useContext(ContextCart);
    const { cartProductList } = state;
    const { subtractionAllProduct, changeDiscountCode, submittCart, changeCartValue } = useCartReducer();

    useEffect(() => {
        const cartProductList: ICartProducts[] = dataCart.cartProductList;
        dispatch({ type: ActionTypeProducts.ProductFromAPI, cartProductList });
    }, [dispatch]);

    useEffect(() => {
        changeCartValue();
    }, [cart.cartProductList, cart.discountCode]);

    return (
        <ul className="cart">
            {cartProductList.map((item, index) => (
                <CartList key={index} cartProduct={item} />
            ))}
            <button onClick={subtractionAllProduct}>ClearCart</button>
            <button onClick={changeDiscountCode}>Get Discount Code</button>
            <p>totalCartPrice {cart.totalCartPrice.toFixed(2)}</p>
            <button onClick={submittCart}>Submit</button>
        </ul>
    );
};

export default Cart;
