import * as React from "react";
import { FunctionComponent, useContext, useEffect } from "react";
import { ICartProduct, IInitialStateCart } from "../App.d";
import { ContextCart } from "../context/contextCart";
import { useCalculateCartProduct } from "../hooks/useCalculateCartProduct";
import { useCartReducer } from "../hooks/useCartReducer";
import Product from "./Product";

interface CartProductProps {
    cartProduct: ICartProduct;
    index: number;
}

const CartProduct: FunctionComponent<CartProductProps> = ({ cartProduct, index }) => {
    const { product, quantity, discount } = cartProduct;
    const { stateCart, addition, subtraction, subtractionAllProduct } = useCartReducer();
    const { totalValue, totalValueWithDiscount } = useCalculateCartProduct(cartProduct);

    return (
        <li className="cart-product">
            <Product product={product} />
            <p>Quantity: {quantity}</p>
            <p>Discount: {discount}%</p>
            {quantity <= 0 ? "" : <button onClick={() => subtraction(index)}>subtraction</button>}
            <button onClick={() => addition(index)}>addition</button>
            {quantity <= 0 ? "" : <button onClick={() => subtractionAllProduct(index)}>removeAll</button>}
            <button>submit</button>
            <p>totalValue: {totalValue ? totalValue : ""}</p>
            <p>totalValueWithDiscount:{totalValueWithDiscount ? totalValueWithDiscount : ""} </p>
        </li>
    );
};

export default CartProduct;
