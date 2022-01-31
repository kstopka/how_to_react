import * as React from "react";
import { FunctionComponent, useContext, useEffect } from "react";
import dataCart from "../data/data.json";
import CartProduct from "./CartProduct";
import { ContextCart } from "../context/contextCart";
import { ContextProduct } from "../context/contextProduct";
import { ActionTypeCart, ActionTypeProduct, ICartProduct } from "../App.d";

interface CartProps {}

const Cart: FunctionComponent<CartProps> = () => {
    const { stateProduct, dispatchProduct } = useContext(ContextProduct);
    const { stateCart, dispatchCart } = useContext(ContextCart);

    // const { stateCart, additionProduct } = useCartReducer(dataCart.cart.cartProductList);
    useEffect(() => {
        const cartProductList: ICartProduct[] = dataCart.cartProductList;
        dispatchProduct({ type: ActionTypeProduct.ProductFromAPI, cartProductList });
    }, [dispatchProduct]);
    const { cartProductList } = stateProduct;

    const cartProducts = cartProductList.map((cartProduct, index) => {
        const addProduct = (cartProduct: ICartProduct) => {
            dispatchCart({ type: ActionTypeCart.AdditionToCart, cartProduct });
        };
        const removeProduct = (id: string) => {
            dispatchCart({ type: ActionTypeCart.RemoveFromCart, id });
        };
        const returnCartProduct = () => {
            return stateCart.cartProductList.find((item) => item.product.id === cartProduct.product.id);
        };
        const corretctCartProduct = returnCartProduct();
        return (
            <li>
                {cartProduct.product.name}
                {corretctCartProduct ? (
                    <div>
                        <CartProduct
                            key={cartProduct.product.id}
                            cartProduct={corretctCartProduct}
                            maxQuantity={cartProduct.quantity}
                        />
                        <button onClick={() => removeProduct(cartProduct.product.id)}>Remove from Cart</button>
                    </div>
                ) : (
                    <button onClick={() => addProduct(cartProduct)}>Add to Cart</button>
                )}
            </li>
        );
    });

    return (
        <ul className="cart">
            {cartProducts}
            {/*         this.discountCart = this.changeValueToPercent(discountCart);
        this.discountCode = discountCode;
        this.totalCartPrice = this.calcTotalCartPrice(); */}
        </ul>
    );
};

export default Cart;
