import * as React from "react";
import { FunctionComponent, useContext, useEffect } from "react";
import dataCart from "../data/data.json";
import CartProduct from "./CartProduct";
import { ContextProduct } from "../context/contextProduct";
import { ActionTypeCart, ActionTypeProduct, ICartProduct } from "../App.d";
import { useCartReducer } from "../hooks/useCartReducer";
import { ContextCart } from "../context/contextCart";

interface CartProps {}

//prodacts data

const Cart: FunctionComponent<CartProps> = () => {
    const { stateProduct, dispatchProduct } = useContext(ContextProduct);
    const { stateCart } = useContext(ContextCart);
    const { cartProductList } = stateProduct;
    const { additionProduct, removeProduct, subtractionAllProduct, changeDiscountCode, submittCart, changeCartValue } =
        useCartReducer();

    useEffect(() => {
        const cartProductList: ICartProduct[] = dataCart.cartProductList;
        dispatchProduct({ type: ActionTypeProduct.ProductFromAPI, cartProductList });
    }, [dispatchProduct]);

    useEffect(() => {
        changeCartValue();
    }, [changeCartValue, stateCart.cartProductList, stateCart.discountCode]);

    const cartProducts = cartProductList.map((cartProduct) => {
        const returnCartProduct = () => {
            return stateCart.cartProductList.find((item) => item.product.id === cartProduct.product.id);
        };
        const addedProductToCart = returnCartProduct();

        const checkDisabled = () => {
            if (cartProduct.quantity === 0) {
                return true;
            }
            return false;
        };
        const isDisabledButtonAdd = checkDisabled();

        return (
            <li>
                {cartProduct.product.name}
                {addedProductToCart ? (
                    <div>
                        {/* key ?? */}
                        <CartProduct
                            key={cartProduct.product.id}
                            cartProduct={addedProductToCart}
                            maxQuantity={cartProduct.quantity}
                        />
                        <button onClick={() => removeProduct(cartProduct.product.id)}>Remove from Cart</button>
                    </div>
                ) : (
                    <button onClick={() => additionProduct(cartProduct)} disabled={isDisabledButtonAdd}>
                        Add to Cart
                    </button>
                )}
            </li>
        );
    });

    return (
        <ul className="cart">
            {cartProducts}
            <button onClick={subtractionAllProduct}>ClearCart</button>
            <button onClick={changeDiscountCode}>Get Discount Code</button>
            <p>totalCartPrice {stateCart.totalCartPrice.toFixed(2)}</p>
            <button onClick={submittCart}>Submit</button>
        </ul>
    );
};

export default Cart;

// discount od 0 do 100
// quantity policzalne
