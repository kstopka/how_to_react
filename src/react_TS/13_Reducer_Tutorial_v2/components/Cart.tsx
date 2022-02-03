import * as React from "react";
import { FunctionComponent, useContext, useEffect } from "react";
import dataCart from "../data/data.json";
import { ContextProduct } from "../context/contextProduct";
import { ActionTypeProduct, ICartProduct } from "../App.d";
import { useCartReducer } from "../hooks/useCartReducer";
import { ContextCart } from "../context/contextCart";
import CartList from "./CartList";

interface CartProps {}

//prodacts data

const Cart: FunctionComponent<CartProps> = () => {
    const { stateProduct, dispatchProduct } = useContext(ContextProduct);
    const { cart } = useContext(ContextCart);
    const { cartProductList } = stateProduct;
    const { subtractionAllProduct, changeDiscountCode, submittCart, changeCartValue } = useCartReducer();

    useEffect(() => {
        const cartProductList: ICartProduct[] = dataCart.cartProductList;
        dispatchProduct({ type: ActionTypeProduct.ProductFromAPI, cartProductList });
    }, [dispatchProduct]);

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

// discount od 0 do 100
// quantity policzalne
